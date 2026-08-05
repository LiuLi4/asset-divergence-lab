import { promises as fs } from 'node:fs'

const [, , residentialPath, districtPath, outputPath] = process.argv
if (!residentialPath || !districtPath || !outputPath) {
  console.error('用法：node scripts/build-osm-community-catalog.mjs <住宅要素.json> <区界.json> <输出.json>')
  process.exit(1)
}

const districtNames = new Map([
  ['海淀区', 'haidian'],
  ['朝阳区', 'chaoyang'],
  ['石景山区', 'shijingshan'],
  ['西城区', 'xicheng'],
  ['丰台区', 'fengtai'],
  ['通州区', 'tongzhou'],
  ['大兴区', 'daxing'],
])

const [residential, districtFeatures] = await Promise.all([
  fs.readFile(residentialPath, 'utf8').then(JSON.parse),
  fs.readFile(districtPath, 'utf8').then(JSON.parse),
])

const pointInRing = ([longitude, latitude], ring) => {
  let inside = false
  for (let current = 0, previous = ring.length - 1; current < ring.length; previous = current, current += 1) {
    const [currentLongitude, currentLatitude] = ring[current]
    const [previousLongitude, previousLatitude] = ring[previous]
    const crosses = (currentLatitude > latitude) !== (previousLatitude > latitude)
      && longitude < (previousLongitude - currentLongitude) * (latitude - currentLatitude) / (previousLatitude - currentLatitude) + currentLongitude
    if (crosses) inside = !inside
  }
  return inside
}

const pointInPolygon = (point, rings) => pointInRing(point, rings[0]) && !rings.slice(1).some((ring) => pointInRing(point, ring))
const pointInGeometry = (point, geometry) => geometry.type === 'Polygon'
  ? pointInPolygon(point, geometry.coordinates)
  : geometry.coordinates.some((polygon) => pointInPolygon(point, polygon))

const districts = districtFeatures.flatMap((feature) => {
  const name = feature.display_name?.split(',')[0]
  const key = districtNames.get(name)
  return key && feature.geojson ? [{ key, name, geometry: feature.geojson }] : []
})
if (districts.length !== districtNames.size) throw new Error(`区界文件只识别出 ${districts.length} / ${districtNames.size} 个区`)

const normaliseName = (value) => value.normalize('NFKC').replace(/[\s·•・]/g, '').toLowerCase()
const typePriority = { relation: 3, way: 2, node: 1 }
const catalog = new Map()

for (const element of residential.elements ?? []) {
  const name = element.tags?.name?.trim()
  const latitude = element.lat ?? element.center?.lat
  const longitude = element.lon ?? element.center?.lon
  if (!name || /^\d+[甲乙丙丁]?\s*(?:号)?(?:楼|栋|幢)$/.test(name) || !Number.isFinite(latitude) || !Number.isFinite(longitude)) continue
  const district = districts.find((candidate) => pointInGeometry([longitude, latitude], candidate.geometry))
  if (!district) continue
  const dedupeKey = `${district.key}:${normaliseName(name)}:${longitude.toFixed(3)}:${latitude.toFixed(3)}`
  const record = {
    id: `osm-${element.type}-${element.id}`,
    district: district.key,
    name,
    longitude,
    latitude,
    osmType: element.type,
    osmId: element.id,
  }
  const existing = catalog.get(dedupeKey)
  if (!existing || typePriority[record.osmType] > typePriority[existing.osmType]) catalog.set(dedupeKey, record)
}

const communities = [...catalog.values()].sort((left, right) => (
  left.district.localeCompare(right.district) || left.name.localeCompare(right.name, 'zh-CN')
))
const counts = Object.fromEntries([...districtNames.values()].map((district) => [
  district,
  communities.filter((community) => community.district === district).length,
]))

const output = {
  version: 1,
  label: '北京七区 OSM 住宅小区目录',
  generatedAt: new Date().toISOString(),
  source: {
    name: 'OpenStreetMap contributors',
    url: 'https://www.openstreetmap.org/copyright',
    license: 'ODbL 1.0',
    attribution: '© OpenStreetMap contributors',
  },
  scope: ['haidian', 'chaoyang', 'shijingshan', 'xicheng', 'fengtai', 'tongzhou', 'daxing'],
  counts,
  communities,
}

await fs.writeFile(outputPath, `${JSON.stringify(output)}\n`, 'utf8')
console.log(`已生成 ${communities.length.toLocaleString('zh-CN')} 个七区住宅要素：${outputPath}`)
