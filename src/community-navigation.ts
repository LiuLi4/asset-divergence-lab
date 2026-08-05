export type CommunityNavigationDirection = 'previous' | 'next'

export interface CommunityNavigationItem {
  id: string
}

export type CommunitySelectionStatus = 'empty' | 'selected' | 'unselected' | 'filtered-out'

export interface CommunityNavigationState<T extends CommunityNavigationItem> {
  community: T | null
  currentId: string | null
  position: number
  total: number
  positionLabel: string
  status: CommunitySelectionStatus
}

export function getCommunityNavigationState<T extends CommunityNavigationItem>(
  communities: readonly T[],
  currentId?: string | null,
): CommunityNavigationState<T> {
  const total = communities.length
  if (total === 0) {
    return {
      community: null,
      currentId: null,
      position: 0,
      total: 0,
      positionLabel: '0 / 0',
      status: 'empty',
    }
  }

  if (!currentId) {
    return {
      community: null,
      currentId: null,
      position: 0,
      total,
      positionLabel: `— / ${total}`,
      status: 'unselected',
    }
  }

  const currentIndex = communities.findIndex((community) => community.id === currentId)
  if (currentIndex < 0) {
    return {
      community: null,
      currentId: null,
      position: 0,
      total,
      positionLabel: `— / ${total}`,
      status: 'filtered-out',
    }
  }

  return {
    community: communities[currentIndex],
    currentId,
    position: currentIndex + 1,
    total,
    positionLabel: `${currentIndex + 1} / ${total}`,
    status: 'selected',
  }
}

export function navigateCommunitySelection<T extends CommunityNavigationItem>(
  communities: readonly T[],
  currentId: string | null | undefined,
  direction: CommunityNavigationDirection,
): CommunityNavigationState<T> {
  if (communities.length === 0) return getCommunityNavigationState(communities, currentId)

  const currentIndex = currentId
    ? communities.findIndex((community) => community.id === currentId)
    : -1
  const nextIndex = currentIndex < 0
    ? direction === 'next' ? 0 : communities.length - 1
    : direction === 'next'
      ? (currentIndex + 1) % communities.length
      : (currentIndex - 1 + communities.length) % communities.length
  const target = communities[nextIndex]

  return getCommunityNavigationState(communities, target.id)
}
