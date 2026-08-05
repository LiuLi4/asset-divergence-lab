import { describe, expect, it } from 'vitest'
import { buildCommunityLocationContext, haversineDistanceKm } from './community-map-context'
import { communityValueSamples } from './community-value'

describe('community location context', () => {
  it('calculates geographic distance from WGS84 coordinates', () => {
    const left = { ...communityValueSamples[0], latitude: 39.9, longitude: 116.3 }
    const right = { ...communityValueSamples[1], latitude: 39.9, longitude: 116.31 }

    expect(haversineDistanceKm(left, right)).toBeGreaterThan(0.8)
    expect(haversineDistanceKm(left, right)).toBeLessThan(0.9)
  })

  it('builds an embeddable local map and nearby-community summary', () => {
    const selected = { ...communityValueSamples[0], latitude: 39.9, longitude: 116.3 }
    const close = { ...communityValueSamples[1], latitude: 39.902, longitude: 116.302 }
    const farther = { ...communityValueSamples[2], latitude: 39.906, longitude: 116.306 }
    const context = buildCommunityLocationContext(selected, [selected, close, farther])

    expect(context).not.toBeNull()
    expect(context?.within500m).toBe(1)
    expect(context?.within1km).toBe(2)
    expect(context?.nearby.map(({ community }) => community.id)).toEqual([close.id, farther.id])
    expect(context?.embedUrl).toContain('openstreetmap.org/export/embed.html')
    expect(context?.embedUrl).toContain('marker=39.900000%2C116.300000')
    expect(context?.externalUrl).toContain('#map=16/39.900000/116.300000')
  })

  it('returns no local-map context when coordinates are unavailable', () => {
    expect(buildCommunityLocationContext({ ...communityValueSamples[0], latitude: undefined, longitude: undefined }, communityValueSamples)).toBeNull()
  })
})
