import { describe, expect, it } from 'vitest'
import {
  calculatePurchaseValue,
  communityValueSamples,
  getCommunitySamples,
  getCommunityScoreBreakdown,
  getPurchaseValueTier,
  parseCommunityValueDataset,
  resolveCommunityPosition,
} from './community-value'
import { findClosestCommunityDot, resolveCommunityCanvasSize } from './hero-map-3d'

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

  it('explains quality, price, liquidity and evidence coverage separately', () => {
    const sample = {
      ...communityValueSamples[0],
      qualityDimensions: { location: 90, transit: 80, environment: 75 },
    }
    expect(getCommunityScoreBreakdown(sample)).toMatchObject({
      qualityScore: sample.qualityScore,
      evidenceCoverage: 65,
      dimensions: sample.qualityDimensions,
    })
  })

  it('provides multiple map samples for every supported district', () => {
    const districts = ['haidian', 'chaoyang', 'shijingshan', 'xicheng', 'fengtai', 'tongzhou', 'daxing'] as const
    districts.forEach((district) => expect(getCommunitySamples(district).length).toBeGreaterThanOrEqual(4))
  })

  it('validates and normalises a locally imported dataset', () => {
    const imported = parseCommunityValueDataset({
      version: 1,
      label: '授权测试数据',
      updatedAt: '2026-08-05',
      sourceName: '测试来源',
      communities: [{ ...communityValueSamples[0], position: undefined, longitude: 116.31, latitude: 39.99, latestUnitPrice: 70_500, nearbyMedianUnitPrice: 77_000, latestTransactionDate: '2026-07-28' }],
    })
    expect(imported.communities).toHaveLength(1)
    expect(imported.communities[0].name).toBe('万泉新新家园')
    expect(imported.communities[0].nearbyMedianUnitPrice).toBe(77_000)
    const position = resolveCommunityPosition(imported.communities[0])
    expect(position.x).toBeGreaterThanOrEqual(0)
    expect(position.x).toBeLessThanOrEqual(100)
    expect(position.y).toBeGreaterThanOrEqual(0)
    expect(position.y).toBeLessThanOrEqual(100)
  })

  it('keeps real edge coordinates inside the calibrated district viewport instead of clamping them', () => {
    const westFengtai = resolveCommunityPosition({
      ...communityValueSamples[0],
      district: 'fengtai',
      longitude: 116.099262,
      latitude: 39.84,
      position: undefined,
    })
    const northEastXicheng = resolveCommunityPosition({
      ...communityValueSamples[0],
      district: 'xicheng',
      longitude: 116.403282,
      latitude: 39.978387,
      position: undefined,
    })
    expect(westFengtai.x).toBeGreaterThan(22)
    expect(northEastXicheng.x).toBeLessThan(78)
    expect(northEastXicheng.y).toBeGreaterThan(26)
  })

  it('rejects duplicate ids and invalid value-model fields', () => {
    const sample = communityValueSamples[0]
    expect(() => parseCommunityValueDataset([sample, sample])).toThrow('重复 id')
    expect(() => parseCommunityValueDataset([{ ...sample, qualityScore: 101 }])).toThrow('qualityScore')
    expect(() => parseCommunityValueDataset([{ ...sample, latestUnitPrice: -1 }])).toThrow('latestUnitPrice')
  })

  it('indexes a large imported collection by district', () => {
    const source = Array.from({ length: 5_000 }, (_, index) => ({
      ...communityValueSamples[index % communityValueSamples.length],
      id: `community-${index}`,
      name: `测试小区 ${index}`,
      position: undefined,
      longitude: undefined,
      latitude: undefined,
    }))
    const dataset = parseCommunityValueDataset(source)
    expect(dataset.communities).toHaveLength(5_000)
    expect(getCommunitySamples('fengtai', dataset.communities).length).toBeGreaterThan(700)
  })

  it('sizes the community overlay from the visible map instead of a hidden canvas', () => {
    expect(resolveCommunityCanvasSize(1_010, 680, 2)).toEqual({
      cssWidth: 1_010,
      cssHeight: 680,
      pixelRatio: 2,
      width: 2_020,
      height: 1_360,
    })
  })

  it('keeps every canvas point independently clickable without one DOM node per community', () => {
    const dots = [
      { id: 'left', x: 20, y: 30 },
      { id: 'right', x: 75, y: 65 },
    ]
    expect(findClosestCommunityDot(dots, 23, 32)?.id).toBe('left')
    expect(findClosestCommunityDot(dots, 72, 68)?.id).toBe('right')
    expect(findClosestCommunityDot(dots, 45, 45)).toBeNull()
  })
})
