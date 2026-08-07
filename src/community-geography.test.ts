import { describe, expect, it } from 'vitest'
import {
  buildCommunityFeatureCollection,
  districtGeographicBounds,
  projectCoordinateToDistrictPercent,
  resolveDistrictGeographicBounds,
} from './community-geography'
import { communityValueSamples } from './community-value'

describe('community geography', () => {
  it('derives a padded district extent from real coordinates', () => {
    const communities = [
      { ...communityValueSamples[0], district: 'xicheng' as const, longitude: 116.34, latitude: 39.89 },
      { ...communityValueSamples[1], district: 'xicheng' as const, longitude: 116.40, latitude: 39.97 },
    ]
    const [[west, south], [east, north]] = resolveDistrictGeographicBounds('xicheng', communities)
    expect(west).toBeLessThan(116.34)
    expect(south).toBeLessThan(39.89)
    expect(east).toBeGreaterThan(116.40)
    expect(north).toBeGreaterThan(39.97)
  })

  it('falls back to a calibrated Beijing district extent without coordinates', () => {
    expect(resolveDistrictGeographicBounds('fengtai', [])).toEqual(districtGeographicBounds.fengtai)
  })

  it('projects longitude and Web Mercator latitude into a stable viewport percentage', () => {
    const bounds = districtGeographicBounds.xicheng
    const centre = projectCoordinateToDistrictPercent(116.36, 39.925, bounds)
    expect(centre.x).toBeCloseTo(50, 4)
    expect(centre.y).toBeGreaterThan(40)
    expect(centre.y).toBeLessThan(60)
  })

  it('builds GeoJSON only from communities with real coordinates', () => {
    const positioned = { ...communityValueSamples[0], longitude: 116.31, latitude: 39.99 }
    const missing = { ...communityValueSamples[1], longitude: undefined, latitude: undefined }
    const collection = buildCommunityFeatureCollection([positioned, missing], () => 82, () => 'strong')
    expect(collection.features).toHaveLength(1)
    expect(collection.features[0]).toMatchObject({
      geometry: { coordinates: [116.31, 39.99] },
      properties: { id: positioned.id, score: 82, tier: 'strong' },
    })
  })
})
