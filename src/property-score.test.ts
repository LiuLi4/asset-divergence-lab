import { describe, expect, it } from 'vitest'
import {
  calculatePriceOpportunityScore,
  calculateEmploymentAccess,
  calculatePropertyScore,
  calculatePurchaseValueScore,
  calculateQualityScore,
} from './property-score'

describe('five-dimension property score', () => {
  it('weights location, amenities, transit, environment and layout to 100%', () => {
    expect(calculateQualityScore({ location: 5, amenities: 4, transit: 3, environment: 2, layout: 1 })).toBe(66)
  })

  it('keeps quality, price opportunity and liquidity as separate layers', () => {
    expect(calculatePropertyScore({
      location: 5,
      amenities: 5,
      transit: 5,
      environment: 4,
      layout: 3,
      price: 4,
      liquidity: 5,
    })).toEqual({
      qualityScore: 90,
      priceOpportunityScore: 80,
      liquidityScore: 100,
      purchaseValueScore: 89,
    })
  })

  it('turns comparable discounts into a bounded price opportunity score', () => {
    expect(calculatePriceOpportunityScore(0)).toBe(50)
    expect(calculatePriceOpportunityScore(10)).toBe(85)
    expect(calculatePriceOpportunityScore(24.34)).toBe(100)
    expect(calculatePriceOpportunityScore(-20)).toBe(0)
  })

  it('prevents weak underlying quality from becoming a strong candidate through price alone', () => {
    expect(calculatePurchaseValueScore({ qualityScore: 50, priceOpportunityScore: 100, liquidityScore: 100 })).toBeLessThanOrEqual(64)
  })

  it('scores location from transparent proximity to named employment hubs', () => {
    expect(calculateEmploymentAccess(39.915, 116.363)).toEqual({ name: '金融街', distanceKm: 0, score: 100 })
    expect(calculateEmploymentAccess(40.30, 116.30).score).toBeLessThan(60)
  })
})
