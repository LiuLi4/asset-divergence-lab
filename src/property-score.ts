export type QualityDimensionKey = 'location' | 'amenities' | 'transit' | 'environment' | 'layout'
export type PropertyScoreKey = QualityDimensionKey | 'price' | 'liquidity'

export type PropertyScoreInputs = Record<PropertyScoreKey, number>

export const qualityDimensionWeights: Record<QualityDimensionKey, number> = {
  location: 30,
  amenities: 20,
  transit: 15,
  environment: 20,
  layout: 15,
}

const employmentHubs = [
  { name: '金融街', latitude: 39.915, longitude: 116.363 },
  { name: '国贸 CBD', latitude: 39.908, longitude: 116.458 },
  { name: '中关村', latitude: 39.983, longitude: 116.315 },
  { name: '上地 / 西二旗', latitude: 40.052, longitude: 116.306 },
  { name: '望京', latitude: 40.001, longitude: 116.475 },
  { name: '亦庄', latitude: 39.795, longitude: 116.506 },
  { name: '运河商务区', latitude: 39.91, longitude: 116.68 },
] as const

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
const normaliseFivePointScore = (value: number) => clamp(value, 1, 5) / 5 * 100
const toRadians = (degrees: number) => degrees * Math.PI / 180

const distanceKm = (left: { latitude: number; longitude: number }, right: { latitude: number; longitude: number }) => {
  const earthRadiusKm = 6_371
  const latitudeDelta = toRadians(right.latitude - left.latitude)
  const longitudeDelta = toRadians(right.longitude - left.longitude)
  const leftLatitude = toRadians(left.latitude)
  const rightLatitude = toRadians(right.latitude)
  const haversine = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(leftLatitude) * Math.cos(rightLatitude) * Math.sin(longitudeDelta / 2) ** 2
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine))
}

export function calculateEmploymentAccess(latitude: number, longitude: number) {
  const nearest = employmentHubs
    .map((hub) => ({ name: hub.name, distanceKm: distanceKm({ latitude, longitude }, hub) }))
    .sort((left, right) => left.distanceKm - right.distanceKm)[0]
  const score = nearest.distanceKm <= 2 ? 100
    : nearest.distanceKm <= 5 ? 92
      : nearest.distanceKm <= 8 ? 84
        : nearest.distanceKm <= 12 ? 72
          : nearest.distanceKm <= 18 ? 60
            : nearest.distanceKm <= 25 ? 48
              : 35
  return { ...nearest, score }
}

export function calculateQualityScore(scores: Pick<PropertyScoreInputs, QualityDimensionKey>) {
  return Object.entries(qualityDimensionWeights).reduce((total, [key, weight]) => (
    total + normaliseFivePointScore(scores[key as QualityDimensionKey]) * weight / 100
  ), 0)
}

export function calculatePriceOpportunityScore(adjustedDiscount: number) {
  return clamp(50 + adjustedDiscount * 3.5, 0, 100)
}

export function calculatePurchaseValueScore(input: {
  qualityScore: number
  priceOpportunityScore: number
  liquidityScore: number
  riskPenalty?: number
}) {
  const rawScore = clamp(input.qualityScore, 0, 100) * 0.65
    + clamp(input.priceOpportunityScore, 0, 100) * 0.25
    + clamp(input.liquidityScore, 0, 100) * 0.1
    - Math.max(input.riskPenalty ?? 0, 0)
  const qualityGatedScore = input.qualityScore <= 60 ? Math.min(rawScore, 64) : rawScore
  return Math.round(clamp(qualityGatedScore, 0, 100))
}

export function calculatePropertyScore(scores: PropertyScoreInputs) {
  const qualityScore = calculateQualityScore(scores)
  const priceOpportunityScore = normaliseFivePointScore(scores.price)
  const liquidityScore = normaliseFivePointScore(scores.liquidity)
  return {
    qualityScore,
    priceOpportunityScore,
    liquidityScore,
    purchaseValueScore: calculatePurchaseValueScore({ qualityScore, priceOpportunityScore, liquidityScore }),
  }
}
