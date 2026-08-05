import { createReadStream, promises as fs } from 'node:fs'
import { createInterface } from 'node:readline'

const [, , communitiesPath, transactionsPath, outputPath] = process.argv
if (!communitiesPath || !transactionsPath || !outputPath) {
  console.error('用法：node scripts/build-community-values.mjs <小区表.csv> <成交表.csv> <输出.json>')
  process.exit(1)
}

const districtMap = new Map([
  ['海淀', 'haidian'], ['海淀区', 'haidian'],
  ['朝阳', 'chaoyang'], ['朝阳区', 'chaoyang'],
  ['石景山', 'shijingshan'], ['石景山区', 'shijingshan'],
  ['西城', 'xicheng'], ['西城区', 'xicheng'],
  ['丰台', 'fengtai'], ['丰台区', 'fengtai'],
  ['通州', 'tongzhou'], ['通州区', 'tongzhou'],
  ['大兴', 'daxing'], ['大兴区', 'daxing'],
])

const sourceName = process.env.COMMUNITY_DATA_SOURCE_NAME || '用户提供的授权 CSV 转换结果'
const sourceUrl = process.env.COMMUNITY_DATA_SOURCE_URL
const datasetLabel = process.env.COMMUNITY_DATA_LABEL

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const number = (value) => {
  const parsed = Number(String(value ?? '').replace(/[,%]/g, '').trim())
  return Number.isFinite(parsed) ? parsed : undefined
}
const median = (values) => {
  if (!values.length) return undefined
  const sorted = [...values].sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2
}
const hash = (value) => [...value].reduce((result, character) => (result * 31 + character.charCodeAt(0)) >>> 0, 2166136261).toString(36)
const distanceKm = (left, right) => {
  const latitudeRadians = (left.latitude + right.latitude) / 2 * Math.PI / 180
  const latitudeKm = (left.latitude - right.latitude) * 111.32
  const longitudeKm = (left.longitude - right.longitude) * 111.32 * Math.cos(latitudeRadians)
  return Math.hypot(latitudeKm, longitudeKm)
}

function parseCsvLine(line) {
  const result = []
  let value = ''
  let quoted = false
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index]
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"'
        index += 1
      } else quoted = !quoted
    } else if (character === ',' && !quoted) {
      result.push(value)
      value = ''
    } else value += character
  }
  result.push(value)
  return result
}

async function forEachCsvRecord(path, callback) {
  const lines = createInterface({ input: createReadStream(path), crlfDelay: Infinity })
  let headers
  for await (const line of lines) {
    if (!headers) {
      headers = parseCsvLine(line.replace(/^\uFEFF/, ''))
      continue
    }
    if (!line.trim()) continue
    const values = parseCsvLine(line)
    const record = Object.fromEntries(headers.map((header, index) => [header, values[index] ?? '']))
    await callback(record)
  }
}

let latestTimestamp = 0
await forEachCsvRecord(transactionsPath, (record) => {
  const timestamp = Date.parse(record['成交日期'])
  if (Number.isFinite(timestamp)) latestTimestamp = Math.max(latestTimestamp, timestamp)
})
if (!latestTimestamp) throw new Error('成交表没有可识别的 成交日期')

const cutoff = latestTimestamp - 180 * 24 * 60 * 60 * 1000
const transactions = new Map()
await forEachCsvRecord(transactionsPath, (record) => {
  const district = districtMap.get(record['区域']?.trim())
  const timestamp = Date.parse(record['成交日期'])
  const unitPrice = number(record['成交单价_元每平'] ?? record['成交单价'])
  const area = number(record['面积_平方米'] ?? record['面积'])
  const rooms = number(record['室数'])
  const name = (record['标准小区名称'] || record['小区名称'] || '').trim()
  if (!district || !name || !unitPrice || unitPrice < 8_000 || unitPrice > 250_000 || (area && (area < 15 || area > 400)) || !Number.isFinite(timestamp) || timestamp < cutoff) return
  const key = `${district}:${name}`
  const group = transactions.get(key) ?? []
  group.push({ timestamp, unitPrice, area, rooms })
  transactions.set(key, group)
})

const communities = []
await forEachCsvRecord(communitiesPath, (record) => {
  const district = districtMap.get(record['区域']?.trim())
  const name = (record['标准小区名称'] || record['小区名称'] || '').trim()
  const zone = (record['标准商圈'] || record['商圈'] || '未标注板块').trim()
  const group = transactions.get(`${district}:${name}`)
  if (!district || !name) return
  const latest = group?.reduce((result, item) => item.timestamp > result.timestamp ? item : result)
  communities.push({
    district,
    name,
    zone,
    longitude: number(record['经度_WGS84'] ?? record['经度']),
    latitude: number(record['纬度_WGS84'] ?? record['纬度']),
    year: number(record['首个竣工年份'] ?? record['竣工年份']),
    greenRate: number(record['绿化率']),
    floorAreaRatio: number(record['容积率']),
    tags: record['标签'] || '',
    propertyCompany: record['物业公司'] || '',
    referencePrice: number(record['参考单价_元每平']),
    latestPrice: latest?.unitPrice,
    latestTransactionDate: latest ? new Date(latest.timestamp).toISOString().slice(0, 10) : undefined,
    latestArea: latest?.area,
    latestRooms: latest?.rooms,
    transactions180d: group?.length ?? 0,
  })
})

const zoneGroups = new Map()
const spatialGroups = new Map()
const gridSize = 0.025
communities.forEach((community) => {
  const key = `${community.district}:${community.zone}`
  const zoneGroup = zoneGroups.get(key) ?? []
  zoneGroup.push(community)
  zoneGroups.set(key, zoneGroup)
  if (Number.isFinite(community.longitude) && Number.isFinite(community.latitude)) {
    const spatialKey = `${community.district}:${Math.floor(community.longitude / gridSize)}:${Math.floor(community.latitude / gridSize)}`
    const spatialGroup = spatialGroups.get(spatialKey) ?? []
    spatialGroup.push(community)
    spatialGroups.set(spatialKey, spatialGroup)
  }
})

const comparableShapeMatches = (community, candidate) => {
  if (candidate === community) return false
  if (!candidate.latestPrice) return false
  if (community.year && candidate.year && Math.abs(community.year - candidate.year) > 15) return false
  if (community.latestArea && candidate.latestArea) {
    const ratio = candidate.latestArea / community.latestArea
    if (ratio < 0.7 || ratio > 1.4) return false
  }
  if (community.latestRooms && candidate.latestRooms && Math.abs(community.latestRooms - candidate.latestRooms) > 1) return false
  return true
}

const getComparableCommunities = (community) => {
  const result = new Set()
  const zoneGroup = zoneGroups.get(`${community.district}:${community.zone}`) ?? []
  zoneGroup.forEach((candidate) => {
    if (comparableShapeMatches(community, candidate)) result.add(candidate)
  })
  if (result.size < 5 && Number.isFinite(community.longitude) && Number.isFinite(community.latitude)) {
    const longitudeCell = Math.floor(community.longitude / gridSize)
    const latitudeCell = Math.floor(community.latitude / gridSize)
    for (let longitudeOffset = -2; longitudeOffset <= 2; longitudeOffset += 1) {
      for (let latitudeOffset = -2; latitudeOffset <= 2; latitudeOffset += 1) {
        const group = spatialGroups.get(`${community.district}:${longitudeCell + longitudeOffset}:${latitudeCell + latitudeOffset}`) ?? []
        group.forEach((candidate) => {
          if (distanceKm(community, candidate) <= 3 && comparableShapeMatches(community, candidate)) result.add(candidate)
        })
      }
    }
  }
  return [...result]
}

const currentYear = new Date(latestTimestamp).getUTCFullYear()
const outputCommunities = communities.map((community) => {
  const comparableCommunities = community.latestPrice ? getComparableCommunities(community) : []
  const comparablePrices = comparableCommunities.map((candidate) => candidate.latestPrice)
  const comparableMedian = median(comparablePrices)
  const dataStatus = community.latestPrice && comparableMedian && comparablePrices.length >= 3 ? 'scored' : 'insufficient'
  const adjustedDiscount = dataStatus === 'scored' ? clamp((comparableMedian - community.latestPrice) / comparableMedian * 100, -30, 30) : 0
  const age = community.year ? currentYear - community.year : undefined
  const ageScore = age === undefined ? 60 : age <= 10 ? 95 : age <= 20 ? 86 : age <= 30 ? 76 : age <= 40 ? 66 : 54
  const greenRate = community.greenRate === undefined ? undefined : community.greenRate > 1 ? community.greenRate / 100 : community.greenRate
  const greenScore = greenRate === undefined ? 60 : clamp(45 + greenRate * 120, 40, 100)
  const densityScore = community.floorAreaRatio === undefined ? 60 : community.floorAreaRatio <= 2 ? 92 : community.floorAreaRatio <= 3 ? 82 : community.floorAreaRatio <= 4 ? 68 : 52
  const transitScore = /地铁|轨道/.test(community.tags) ? 92 : 62
  const managementScore = community.propertyCompany && !/暂无|自管/.test(community.propertyCompany) ? 82 : 58
  const liquidityScore = clamp(40 + community.transactions180d * 5, 0, 100)
  const confidenceScore = clamp(20 + community.transactions180d * 5 + Math.min(comparablePrices.length, 12) * 5, 0, 100)
  const qualityScore = Math.round(ageScore * 0.3 + greenScore * 0.2 + densityScore * 0.2 + transitScore * 0.15 + managementScore * 0.15)
  const riskPenalty = Math.round((age && age > 40 ? 4 : 0) + (community.floorAreaRatio && community.floorAreaRatio > 4 ? 3 : 0) + (community.transactions180d < 3 ? 4 : 0) + (comparablePrices.length < 3 ? 12 : comparablePrices.length < 5 ? 6 : 0))
  const insufficientReason = community.transactions180d === 0 ? '近180天无可核验成交' : '同质可比样本不足'
  const watch = dataStatus === 'insufficient'
    ? `${insufficientReason}，暂不评分；逐套核验房况与产权`
    : [age && age > 40 ? '楼龄与维护' : '', community.floorAreaRatio && community.floorAreaRatio > 4 ? '居住密度' : '', community.transactions180d < 5 ? '成交样本偏少' : '', comparablePrices.length < 5 ? '同质可比不足' : '', '逐套房况与产权'].filter(Boolean).join('、')
  return {
    id: `${community.district}-${hash(community.name)}`,
    district: community.district,
    name: community.name,
    zone: community.zone,
    longitude: community.longitude,
    latitude: community.latitude,
    dataStatus,
    qualityScore,
    adjustedDiscount: Number(adjustedDiscount.toFixed(2)),
    referenceUnitPrice: community.referencePrice ? Math.round(community.referencePrice) : undefined,
    latestUnitPrice: community.latestPrice ? Math.round(community.latestPrice) : undefined,
    nearbyMedianUnitPrice: comparableMedian ? Math.round(comparableMedian) : undefined,
    latestTransactionDate: community.latestTransactionDate,
    liquidityScore: Math.round(liquidityScore),
    confidenceScore: Math.round(confidenceScore),
    riskPenalty,
    transactions180d: community.transactions180d,
    comparableSamples: comparablePrices.length,
    watch,
  }
})

const scoredCount = outputCommunities.filter((community) => community.dataStatus === 'scored').length
const dataset = {
  version: 1,
  label: datasetLabel || `北京七区 · 成交截至 ${new Date(latestTimestamp).toISOString().slice(0, 10)}`,
  updatedAt: new Date(latestTimestamp).toISOString(),
  sourceName,
  ...(sourceUrl ? { sourceUrl } : {}),
  communities: outputCommunities,
}

await fs.writeFile(outputPath, `${JSON.stringify(dataset, null, 2)}\n`, 'utf8')
console.log(`已生成 ${outputCommunities.length.toLocaleString('zh-CN')} 个小区，其中 ${scoredCount.toLocaleString('zh-CN')} 个具备评分证据：${outputPath}`)
