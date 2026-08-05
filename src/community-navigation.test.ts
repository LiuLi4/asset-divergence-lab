import { describe, expect, it } from 'vitest'
import {
  getCommunityNavigationState,
  navigateCommunitySelection,
} from './community-navigation'

const communities = [
  { id: 'community-a', name: '小区 A' },
  { id: 'community-b', name: '小区 B' },
  { id: 'community-c', name: '小区 C' },
] as const

describe('community sequential navigation', () => {
  it('moves through the current ordered list and reports the target position', () => {
    const result = navigateCommunitySelection(communities, 'community-a', 'next')

    expect(result.community).toEqual(communities[1])
    expect(result.currentId).toBe('community-b')
    expect(result.position).toBe(2)
    expect(result.total).toBe(3)
    expect(result.positionLabel).toBe('2 / 3')
    expect(result.status).toBe('selected')
  })

  it('wraps at both ends of the filtered list', () => {
    expect(navigateCommunitySelection(communities, 'community-c', 'next').community?.id).toBe('community-a')
    expect(navigateCommunitySelection(communities, 'community-a', 'previous').community?.id).toBe('community-c')
  })

  it('starts at the direction-appropriate edge when there is no selection', () => {
    expect(navigateCommunitySelection(communities, null, 'next').community?.id).toBe('community-a')
    expect(navigateCommunitySelection(communities, undefined, 'previous').community?.id).toBe('community-c')
  })

  it('recovers when the selected community was removed by a filter change', () => {
    const filtered = [communities[1], communities[2]]

    const staleState = getCommunityNavigationState(filtered, 'community-a')
    expect(staleState).toMatchObject({
      community: null,
      currentId: null,
      position: 0,
      total: 2,
      positionLabel: '— / 2',
      status: 'filtered-out',
    })
    expect(navigateCommunitySelection(filtered, 'community-a', 'next').community?.id).toBe('community-b')
    expect(navigateCommunitySelection(filtered, 'community-a', 'previous').community?.id).toBe('community-c')
  })

  it('returns an explicit empty state for an empty filtered list', () => {
    expect(navigateCommunitySelection([], 'community-a', 'next')).toEqual({
      community: null,
      currentId: null,
      position: 0,
      total: 0,
      positionLabel: '0 / 0',
      status: 'empty',
    })
  })
})
