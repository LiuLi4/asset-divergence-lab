export type DistrictKey = 'haidian' | 'chaoyang' | 'shijingshan' | 'xicheng' | 'fengtai' | 'tongzhou' | 'daxing'

export type PurchaseValueTier = 'strong' | 'watch' | 'cautious'

export interface CommunityValueSample {
  id: string
  district: DistrictKey
  name: string
  zone: string
  position: { x: number; y: number }
  qualityScore: number
  adjustedDiscount: number
  liquidityScore: number
  confidenceScore: number
  riskPenalty: number
  transactions180d: number
  comparableSamples: number
  watch: string
}

export const purchaseValueBands: Record<PurchaseValueTier, { label: string; range: string }> = {
  strong: { label: '优先核验', range: '80–100' },
  watch: { label: '持续观察', range: '65–79' },
  cautious: { label: '谨慎进入', range: '0–64' },
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

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

export function getCommunitySamples(district: DistrictKey) {
  return communityValueSamples.filter((sample) => sample.district === district)
}

