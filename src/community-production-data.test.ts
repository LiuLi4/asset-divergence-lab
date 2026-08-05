import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { calculatePurchaseValue, formatDataDate, getPurchaseValueTier, parseCommunityValueDataset } from './community-value'

const rawDataset = JSON.parse(readFileSync(new URL('../public/data/community-values.json', import.meta.url), 'utf8'))
const dataset = parseCommunityValueDataset(rawDataset)

describe('authorized Beijing community production dataset', () => {
  it('covers every community in the authorized seven-district catalog', () => {
    expect(dataset.communities).toHaveLength(7_972)
    expect(new Set(dataset.communities.map(({ id }) => id)).size).toBe(dataset.communities.length)
    expect(dataset.sourceName).toBe('北京房地产 Dashboard 授权数据')
    expect(dataset.sourceUrl).toContain('beijing-property-dashboard/releases/tag/data-latest')

    const districts = ['haidian', 'chaoyang', 'shijingshan', 'xicheng', 'fengtai', 'tongzhou', 'daxing'] as const
    districts.forEach((district) => {
      expect(dataset.communities.filter((community) => community.district === district).length).toBeGreaterThan(0)
    })

    expect(formatDataDate(dataset.updatedAt)).toBe('2025-08-01')
    expect(Object.fromEntries(districts.map((district) => [district, dataset.communities.filter((community) => community.district === district).length]))).toEqual({
      haidian: 1_617,
      chaoyang: 2_130,
      shijingshan: 311,
      xicheng: 1_018,
      fengtai: 1_284,
      tongzhou: 845,
      daxing: 767,
    })
  })

  it('has all three score colours and an explicit insufficient-data state', () => {
    const counts = { strong: 0, watch: 0, cautious: 0, insufficient: 0 }
    dataset.communities.forEach((community) => {
      if (community.dataStatus === 'insufficient') counts.insufficient += 1
      else counts[getPurchaseValueTier(calculatePurchaseValue(community))] += 1
    })

    expect(counts.strong).toBeGreaterThan(0)
    expect(counts.watch).toBeGreaterThan(0)
    expect(counts.cautious).toBeGreaterThan(0)
    expect(counts.insufficient).toBeGreaterThan(0)
    expect(counts.strong + counts.watch + counts.cautious).toBe(2_578)
  })
})
