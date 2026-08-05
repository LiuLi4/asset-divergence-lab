export type DistrictKey = 'haidian' | 'chaoyang' | 'shijingshan' | 'xicheng' | 'fengtai' | 'tongzhou' | 'daxing'

export type PurchaseValueTier = 'strong' | 'watch' | 'cautious'
export type CommunityDataStatus = 'scored' | 'insufficient'

export interface CommunityValueSample {
  id: string
  district: DistrictKey
  name: string
  zone: string
  position?: { x: number; y: number }
  longitude?: number
  latitude?: number
  dataStatus?: CommunityDataStatus
  qualityScore: number
  adjustedDiscount: number
  referenceUnitPrice?: number
  latestUnitPrice?: number
  nearbyMedianUnitPrice?: number
  latestTransactionDate?: string
  liquidityScore: number
  confidenceScore: number
  riskPenalty: number
  transactions180d: number
  comparableSamples: number
  watch: string
}

export interface CommunityValueDataset {
  version: 1
  label: string
  updatedAt: string
  sourceName: string
  sourceUrl?: string
  communities: CommunityValueSample[]
}

export interface CommunityPosition {
  x: number
  y: number
}

export const purchaseValueBands: Record<PurchaseValueTier, { label: string; range: string }> = {
  strong: { label: '优先核验', range: '80–100' },
  watch: { label: '持续观察', range: '65–79' },
  cautious: { label: '谨慎进入', range: '0–64' },
}

export function formatDataDate(value: string) {
  const isoDate = value.match(/^(\d{4}-\d{2}-\d{2})/)
  if (isoDate) return isoDate[1]
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value || '时间未知'
  return parsed.toISOString().slice(0, 10)
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
const districtKeys: DistrictKey[] = ['haidian', 'chaoyang', 'shijingshan', 'xicheng', 'fengtai', 'tongzhou', 'daxing']
const districtBounds: Record<DistrictKey, { minLongitude: number; maxLongitude: number; minLatitude: number; maxLatitude: number }> = {
  haidian: { minLongitude: 116.03, maxLongitude: 116.39, minLatitude: 39.87, maxLatitude: 40.16 },
  chaoyang: { minLongitude: 116.36, maxLongitude: 116.65, minLatitude: 39.80, maxLatitude: 40.13 },
  shijingshan: { minLongitude: 116.11, maxLongitude: 116.27, minLatitude: 39.87, maxLatitude: 40.00 },
  xicheng: { minLongitude: 116.32, maxLongitude: 116.39, minLatitude: 39.87, maxLatitude: 39.97 },
  fengtai: { minLongitude: 116.22, maxLongitude: 116.48, minLatitude: 39.76, maxLatitude: 39.91 },
  tongzhou: { minLongitude: 116.52, maxLongitude: 116.93, minLatitude: 39.74, maxLatitude: 40.03 },
  daxing: { minLongitude: 116.24, maxLongitude: 116.72, minLatitude: 39.44, maxLatitude: 39.83 },
}

const numberInRange = (value: unknown, min: number, max: number) => typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max
const nonEmptyString = (value: unknown) => typeof value === 'string' && value.trim().length > 0
const stableHash = (value: string) => [...value].reduce((hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0, 2166136261)

export function calculatePurchaseValue(sample: CommunityValueSample) {
  const discountScore = clamp(50 + sample.adjustedDiscount * 3.5, 0, 100)
  const rawScore = sample.qualityScore * 0.45
    + discountScore * 0.3
    + sample.liquidityScore * 0.15
    + sample.confidenceScore * 0.1
    - sample.riskPenalty

  // 低于优质小区门槛时，价格折让不能把明显短板补成高价值候选。
  return Math.round(clamp(sample.qualityScore < 75 ? Math.min(rawScore, 64) : rawScore, 0, 100))
}

export function getPurchaseValueTier(score: number): PurchaseValueTier {
  if (score >= 80) return 'strong'
  if (score >= 65) return 'watch'
  return 'cautious'
}

export function resolveCommunityPosition(sample: CommunityValueSample): CommunityPosition {
  if (sample.position && numberInRange(sample.position.x, 0, 100) && numberInRange(sample.position.y, 0, 100)) {
    return { x: sample.position.x, y: sample.position.y }
  }

  if (numberInRange(sample.longitude, 70, 140) && numberInRange(sample.latitude, 10, 60)) {
    const bounds = districtBounds[sample.district]
    const xRatio = clamp((sample.longitude! - bounds.minLongitude) / (bounds.maxLongitude - bounds.minLongitude), 0, 1)
    const yRatio = clamp((bounds.maxLatitude - sample.latitude!) / (bounds.maxLatitude - bounds.minLatitude), 0, 1)
    return { x: 22 + xRatio * 56, y: 26 + yRatio * 41 }
  }

  const hash = stableHash(`${sample.district}:${sample.id}:${sample.name}`)
  return { x: 24 + hash % 53, y: 28 + Math.floor(hash / 53) % 38 }
}

export function parseCommunityValueDataset(input: unknown): CommunityValueDataset {
  const value = Array.isArray(input)
    ? { version: 1, label: '导入数据', updatedAt: new Date().toISOString(), sourceName: '本地文件', communities: input }
    : input
  if (!value || typeof value !== 'object') throw new Error('数据文件必须是 JSON 对象或数组')

  const record = value as Record<string, unknown>
  if (!Array.isArray(record.communities)) throw new Error('缺少 communities 数组')
  if (record.communities.length === 0) throw new Error('communities 不能为空')
  if (record.communities.length > 50_000) throw new Error('单次最多导入 50,000 个小区')

  const ids = new Set<string>()
  const communities = record.communities.map((raw, index) => {
    if (!raw || typeof raw !== 'object') throw new Error(`第 ${index + 1} 条小区记录格式错误`)
    const sample = raw as Record<string, unknown>
    const district = sample.district as DistrictKey
    const requiredStrings = ['id', 'name', 'zone', 'watch'] as const
    requiredStrings.forEach((key) => {
      if (!nonEmptyString(sample[key])) throw new Error(`第 ${index + 1} 条记录缺少 ${key}`)
    })
    if (!districtKeys.includes(district)) throw new Error(`第 ${index + 1} 条记录 district 不受支持`)
    if (ids.has(sample.id as string)) throw new Error(`发现重复 id：${sample.id as string}`)
    ids.add(sample.id as string)

    const scoreFields = ['qualityScore', 'liquidityScore', 'confidenceScore'] as const
    scoreFields.forEach((key) => {
      if (!numberInRange(sample[key], 0, 100)) throw new Error(`第 ${index + 1} 条记录 ${key} 必须在 0–100`)
    })
    if (!numberInRange(sample.adjustedDiscount, -50, 50)) throw new Error(`第 ${index + 1} 条记录 adjustedDiscount 必须在 -50–50`)
    if (sample.dataStatus !== undefined && sample.dataStatus !== 'scored' && sample.dataStatus !== 'insufficient') throw new Error(`第 ${index + 1} 条记录 dataStatus 格式错误`)
    if (sample.referenceUnitPrice !== undefined && !numberInRange(sample.referenceUnitPrice, 0, 1_000_000)) throw new Error(`第 ${index + 1} 条记录 referenceUnitPrice 格式错误`)
    if (sample.latestUnitPrice !== undefined && !numberInRange(sample.latestUnitPrice, 0, 1_000_000)) throw new Error(`第 ${index + 1} 条记录 latestUnitPrice 格式错误`)
    if (sample.nearbyMedianUnitPrice !== undefined && !numberInRange(sample.nearbyMedianUnitPrice, 0, 1_000_000)) throw new Error(`第 ${index + 1} 条记录 nearbyMedianUnitPrice 格式错误`)
    if (!numberInRange(sample.riskPenalty, 0, 100)) throw new Error(`第 ${index + 1} 条记录 riskPenalty 必须在 0–100`)
    if (!numberInRange(sample.transactions180d, 0, 100_000) || !numberInRange(sample.comparableSamples, 0, 100_000)) {
      throw new Error(`第 ${index + 1} 条记录成交样本必须是非负数`)
    }
    const position = sample.position as Record<string, unknown> | undefined
    if (position && (!numberInRange(position.x, 0, 100) || !numberInRange(position.y, 0, 100))) {
      throw new Error(`第 ${index + 1} 条记录 position 必须在 0–100`)
    }

    return {
      id: (sample.id as string).trim(),
      district,
      name: (sample.name as string).trim(),
      zone: (sample.zone as string).trim(),
      watch: (sample.watch as string).trim(),
      position: position ? { x: position.x as number, y: position.y as number } : undefined,
      longitude: typeof sample.longitude === 'number' ? sample.longitude : undefined,
      latitude: typeof sample.latitude === 'number' ? sample.latitude : undefined,
      dataStatus: sample.dataStatus === 'insufficient' ? 'insufficient' as const : 'scored' as const,
      qualityScore: sample.qualityScore as number,
      adjustedDiscount: sample.adjustedDiscount as number,
      referenceUnitPrice: typeof sample.referenceUnitPrice === 'number' ? sample.referenceUnitPrice : undefined,
      latestUnitPrice: typeof sample.latestUnitPrice === 'number' ? sample.latestUnitPrice : undefined,
      nearbyMedianUnitPrice: typeof sample.nearbyMedianUnitPrice === 'number' ? sample.nearbyMedianUnitPrice : undefined,
      latestTransactionDate: nonEmptyString(sample.latestTransactionDate) ? (sample.latestTransactionDate as string).trim() : undefined,
      liquidityScore: sample.liquidityScore as number,
      confidenceScore: sample.confidenceScore as number,
      riskPenalty: sample.riskPenalty as number,
      transactions180d: sample.transactions180d as number,
      comparableSamples: sample.comparableSamples as number,
    }
  })

  return {
    version: 1,
    label: nonEmptyString(record.label) ? (record.label as string).trim() : '导入数据',
    updatedAt: nonEmptyString(record.updatedAt) ? (record.updatedAt as string).trim() : new Date().toISOString(),
    sourceName: nonEmptyString(record.sourceName) ? (record.sourceName as string).trim() : '本地文件',
    sourceUrl: nonEmptyString(record.sourceUrl) ? (record.sourceUrl as string).trim() : undefined,
    communities,
  }
}

export const communityValueSamples: CommunityValueSample[] = [
  { id: 'hd-wqx', district: 'haidian', name: '万泉新新家园', zone: '万柳', position: { x: 30, y: 39 }, qualityScore: 88, adjustedDiscount: 10.8, liquidityScore: 85, confidenceScore: 82, riskPenalty: 2, transactions180d: 9, comparableSamples: 14, watch: '总价门槛与具体楼栋噪声' },
  { id: 'hd-xs', district: 'haidian', name: '橡树湾', zone: '清河', position: { x: 55, y: 32 }, qualityScore: 84, adjustedDiscount: 7.2, liquidityScore: 88, confidenceScore: 86, riskPenalty: 1, transactions180d: 12, comparableSamples: 18, watch: '不同组团与楼龄差异' },
  { id: 'hd-sdd', district: 'haidian', name: '上地东里', zone: '上地', position: { x: 69, y: 51 }, qualityScore: 81, adjustedDiscount: 3.4, liquidityScore: 75, confidenceScore: 72, riskPenalty: 3, transactions180d: 6, comparableSamples: 9, watch: '房龄、停车与户型效率' },
  { id: 'hd-sjc', district: 'haidian', name: '世纪城', zone: '四季青', position: { x: 42, y: 63 }, qualityScore: 72, adjustedDiscount: 9.1, liquidityScore: 67, confidenceScore: 70, riskPenalty: 4, transactions180d: 5, comparableSamples: 8, watch: '组团分化与物业维护' },

  { id: 'cy-yytd', district: 'chaoyang', name: '远洋天地', zone: '四惠', position: { x: 29, y: 36 }, qualityScore: 84, adjustedDiscount: 9.6, liquidityScore: 86, confidenceScore: 84, riskPenalty: 2, transactions180d: 11, comparableSamples: 16, watch: '临路楼栋与产品差异' },
  { id: 'cy-jjqy', district: 'chaoyang', name: '季景沁园', zone: '望京', position: { x: 57, y: 31 }, qualityScore: 86, adjustedDiscount: 5.8, liquidityScore: 82, confidenceScore: 78, riskPenalty: 2, transactions180d: 8, comparableSamples: 12, watch: '楼栋位置与学位口径' },
  { id: 'cy-scgj', district: 'chaoyang', name: '首城国际', zone: '双井', position: { x: 68, y: 54 }, qualityScore: 79, adjustedDiscount: 4.1, liquidityScore: 84, confidenceScore: 80, riskPenalty: 3, transactions180d: 10, comparableSamples: 15, watch: '高密度与楼层采光' },
  { id: 'cy-cymy', district: 'chaoyang', name: '常营民族家园', zone: '常营', position: { x: 40, y: 64 }, qualityScore: 70, adjustedDiscount: 11.2, liquidityScore: 68, confidenceScore: 69, riskPenalty: 4, transactions180d: 7, comparableSamples: 10, watch: '通勤半径与供应规模' },

  { id: 'sjs-yys', district: 'shijingshan', name: '远洋山水', zone: '鲁谷', position: { x: 31, y: 38 }, qualityScore: 82, adjustedDiscount: 9.9, liquidityScore: 80, confidenceScore: 79, riskPenalty: 2, transactions180d: 8, comparableSamples: 13, watch: '组团体量与临街影响' },
  { id: 'sjs-zhjx', district: 'shijingshan', name: '中海金玺公馆', zone: '古城', position: { x: 57, y: 34 }, qualityScore: 80, adjustedDiscount: 5.5, liquidityScore: 72, confidenceScore: 70, riskPenalty: 3, transactions180d: 5, comparableSamples: 8, watch: '产业兑现与总价流动性' },
  { id: 'sjs-xsfl', district: 'shijingshan', name: '西山枫林', zone: '苹果园', position: { x: 67, y: 55 }, qualityScore: 76, adjustedDiscount: 3.2, liquidityScore: 64, confidenceScore: 66, riskPenalty: 4, transactions180d: 4, comparableSamples: 7, watch: '坡地通勤与产品差异' },
  { id: 'sjs-yqxl', district: 'shijingshan', name: '玉泉西里', zone: '玉泉路', position: { x: 42, y: 65 }, qualityScore: 69, adjustedDiscount: 8.8, liquidityScore: 61, confidenceScore: 64, riskPenalty: 5, transactions180d: 3, comparableSamples: 6, watch: '房龄、停车与成交样本' },

  { id: 'xc-yglj', district: 'xicheng', name: '阳光丽景', zone: '德胜', position: { x: 30, y: 37 }, qualityScore: 91, adjustedDiscount: 8.3, liquidityScore: 82, confidenceScore: 83, riskPenalty: 2, transactions180d: 7, comparableSamples: 11, watch: '学位核验与高总价' },
  { id: 'xc-rf', district: 'xicheng', name: '荣丰2008', zone: '广安门', position: { x: 55, y: 31 }, qualityScore: 80, adjustedDiscount: 11.5, liquidityScore: 89, confidenceScore: 88, riskPenalty: 3, transactions180d: 14, comparableSamples: 20, watch: '小户型产品与居住密度' },
  { id: 'xc-yjmy', district: 'xicheng', name: '远见名苑', zone: '广外', position: { x: 69, y: 53 }, qualityScore: 77, adjustedDiscount: 3.8, liquidityScore: 73, confidenceScore: 75, riskPenalty: 4, transactions180d: 6, comparableSamples: 9, watch: '物业维护与楼栋朝向' },
  { id: 'xc-csy', district: 'xicheng', name: '椿树园', zone: '宣武门', position: { x: 41, y: 64 }, qualityScore: 71, adjustedDiscount: 7.5, liquidityScore: 66, confidenceScore: 68, riskPenalty: 5, transactions180d: 4, comparableSamples: 7, watch: '楼龄、户型与无电梯房源' },

  { id: 'ft-xfyy', district: 'fengtai', name: '西府颐园', zone: '丽泽', position: { x: 29, y: 38 }, qualityScore: 84, adjustedDiscount: 10.2, liquidityScore: 81, confidenceScore: 80, riskPenalty: 2, transactions180d: 8, comparableSamples: 12, watch: '兑现节奏与具体楼栋' },
  { id: 'ft-jtgj', district: 'fengtai', name: '金唐国际', zone: '丽泽', position: { x: 57, y: 32 }, qualityScore: 79, adjustedDiscount: 6.4, liquidityScore: 77, confidenceScore: 74, riskPenalty: 3, transactions180d: 6, comparableSamples: 10, watch: '商住边界与产品属性' },
  { id: 'ft-wnhc', district: 'fengtai', name: '万年花城', zone: '花乡', position: { x: 69, y: 54 }, qualityScore: 77, adjustedDiscount: 3.6, liquidityScore: 79, confidenceScore: 76, riskPenalty: 3, transactions180d: 7, comparableSamples: 11, watch: '组团差异与通勤换乘' },
  { id: 'ft-fgy', district: 'fengtai', name: '方庄芳古园', zone: '方庄', position: { x: 41, y: 65 }, qualityScore: 70, adjustedDiscount: 8.9, liquidityScore: 65, confidenceScore: 69, riskPenalty: 5, transactions180d: 5, comparableSamples: 8, watch: '房龄、停车与物业维护' },

  { id: 'tz-jmgj', district: 'tongzhou', name: '京贸国际城', zone: '武夷花园', position: { x: 30, y: 37 }, qualityScore: 81, adjustedDiscount: 9.3, liquidityScore: 78, confidenceScore: 77, riskPenalty: 3, transactions180d: 7, comparableSamples: 11, watch: '跨区通勤与供应节奏' },
  { id: 'tz-xbjzx', district: 'tongzhou', name: '新北京中心', zone: '运河商务区', position: { x: 56, y: 31 }, qualityScore: 78, adjustedDiscount: 5.1, liquidityScore: 71, confidenceScore: 70, riskPenalty: 4, transactions180d: 5, comparableSamples: 8, watch: '产品属性与兑现周期' },
  { id: 'tz-zjyj', district: 'tongzhou', name: '珠江逸景家园', zone: '马驹桥', position: { x: 68, y: 54 }, qualityScore: 75, adjustedDiscount: 2.7, liquidityScore: 63, confidenceScore: 65, riskPenalty: 5, transactions180d: 4, comparableSamples: 7, watch: '产业通勤与同质供应' },
  { id: 'tz-k2', district: 'tongzhou', name: 'K2清水湾', zone: '梨园', position: { x: 40, y: 64 }, qualityScore: 68, adjustedDiscount: 10.1, liquidityScore: 60, confidenceScore: 62, riskPenalty: 6, transactions180d: 3, comparableSamples: 6, watch: '成交样本与产品分化' },

  { id: 'dx-jdys', district: 'daxing', name: '金地仰山', zone: '黄村', position: { x: 30, y: 37 }, qualityScore: 80, adjustedDiscount: 9.1, liquidityScore: 76, confidenceScore: 75, riskPenalty: 3, transactions180d: 7, comparableSamples: 11, watch: '通勤时间与新增供应' },
  { id: 'dx-blml', district: 'daxing', name: '保利茉莉公馆', zone: '高米店', position: { x: 56, y: 31 }, qualityScore: 78, adjustedDiscount: 4.9, liquidityScore: 74, confidenceScore: 72, riskPenalty: 3, transactions180d: 6, comparableSamples: 9, watch: '楼栋位置与板块供应' },
  { id: 'dx-zysc', district: 'daxing', name: '枣园尚城', zone: '枣园', position: { x: 68, y: 54 }, qualityScore: 75, adjustedDiscount: 2.6, liquidityScore: 66, confidenceScore: 67, riskPenalty: 4, transactions180d: 4, comparableSamples: 7, watch: '成交速度与户型效率' },
  { id: 'dx-lkgy', district: 'daxing', name: '林肯公园', zone: '亦庄', position: { x: 40, y: 64 }, qualityScore: 69, adjustedDiscount: 9.7, liquidityScore: 61, confidenceScore: 64, riskPenalty: 6, transactions180d: 3, comparableSamples: 6, watch: '产权属性与流动性' },
]

export function getCommunitySamples(district: DistrictKey, source: CommunityValueSample[] = communityValueSamples) {
  return source.filter((sample) => sample.district === district)
}
