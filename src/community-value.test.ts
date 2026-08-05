import { describe, expect, it } from 'vitest'
import { calculatePurchaseValue, communityValueSamples, getCommunitySamples, getPurchaseValueTier } from './community-value'

describe('community purchase value model', () => {
  it('uses stable score bands for map colours', () => {
    expect(getPurchaseValueTier(80)).toBe('strong')
    expect(getPurchaseValueTier(79)).toBe('watch')
    expect(getPurchaseValueTier(65)).toBe('watch')
    expect(getPurchaseValueTier(64)).toBe('cautious')
  })

  it('does not let a large discount override the quality gate', () => {
    const lowQuality = { ...communityValueSamples[0], qualityScore: 60, adjustedDiscount: 20, riskPenalty: 0 }
    expect(calculatePurchaseValue(lowQuality)).toBeLessThanOrEqual(64)
  })

  it('provides multiple map samples for every supported district', () => {
    const districts = ['haidian', 'chaoyang', 'shijingshan', 'xicheng', 'fengtai', 'tongzhou', 'daxing'] as const
    districts.forEach((district) => expect(getCommunitySamples(district).length).toBeGreaterThanOrEqual(4))
  })
})
