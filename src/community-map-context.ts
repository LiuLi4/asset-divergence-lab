import type { CommunityValueSample } from './community-value'

export interface NearbyCommunityReference {
  community: CommunityValueSample
  distanceKm: number
}

export interface CommunityLocationContext {
  coordinateLabel: string
  within500m: number
  within1km: number
  nearby: NearbyCommunityReference[]
  embedUrl: string
  externalUrl: string
}

const toRadians = (degrees: number) => degrees * Math.PI / 180

export function haversineDistanceKm(left: CommunityValueSample, right: CommunityValueSample) {
  if (left.latitude === undefined || left.longitude === undefined || right.latitude === undefined || right.longitude === undefined) return Number.POSITIVE_INFINITY
  const earthRadiusKm = 6_371
  const latitudeDelta = toRadians(right.latitude - left.latitude)
  const longitudeDelta = toRadians(right.longitude - left.longitude)
  const leftLatitude = toRadians(left.latitude)
  const rightLatitude = toRadians(right.latitude)
  const haversine = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(leftLatitude) * Math.cos(rightLatitude) * Math.sin(longitudeDelta / 2) ** 2
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine))
}

export function buildCommunityLocationContext(selected: CommunityValueSample, communities: readonly CommunityValueSample[]): CommunityLocationContext | null {
  if (selected.latitude === undefined || selected.longitude === undefined) return null
  const distances = communities
    .filter((community) => community.id !== selected.id)
    .map((community) => ({ community, distanceKm: haversineDistanceKm(selected, community) }))
    .filter(({ distanceKm }) => Number.isFinite(distanceKm))
    .sort((left, right) => left.distanceKm - right.distanceKm)
  const longitudeSpan = 0.012
  const latitudeSpan = 0.008
  const bbox = [
    selected.longitude - longitudeSpan,
    selected.latitude - latitudeSpan,
    selected.longitude + longitudeSpan,
    selected.latitude + latitudeSpan,
  ].map((value) => value.toFixed(6)).join(',')
  const marker = `${selected.latitude.toFixed(6)},${selected.longitude.toFixed(6)}`

  return {
    coordinateLabel: `${selected.latitude.toFixed(5)}, ${selected.longitude.toFixed(5)}`,
    within500m: distances.filter(({ distanceKm }) => distanceKm <= 0.5).length,
    within1km: distances.filter(({ distanceKm }) => distanceKm <= 1).length,
    nearby: distances.slice(0, 3),
    embedUrl: `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${encodeURIComponent(marker)}`,
    externalUrl: `https://www.openstreetmap.org/?mlat=${selected.latitude.toFixed(6)}&mlon=${selected.longitude.toFixed(6)}#map=16/${selected.latitude.toFixed(6)}/${selected.longitude.toFixed(6)}`,
  }
}
