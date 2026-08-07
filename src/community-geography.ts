import type { Feature, FeatureCollection, Point } from 'geojson'
import type { CommunityValueSample, DistrictKey } from './community-value'

export type GeographicBounds = [[west: number, south: number], [east: number, north: number]]

export interface CommunityMapProperties {
  id: string
  name: string
  score: number
  tier: string
}

export const districtGeographicBounds: Record<DistrictKey, GeographicBounds> = {
  haidian: [[116.10, 39.85], [116.41, 40.15]],
  chaoyang: [[116.34, 39.79], [116.66, 40.14]],
  shijingshan: [[116.10, 39.87], [116.28, 40.00]],
  xicheng: [[116.31, 39.86], [116.41, 39.99]],
  fengtai: [[116.08, 39.76], [116.49, 39.92]],
  tongzhou: [[116.50, 39.55], [116.94, 40.05]],
  daxing: [[116.22, 39.42], [116.73, 39.85]],
}

export function hasGeographicCoordinate(sample: CommunityValueSample) {
  return Number.isFinite(sample.longitude)
    && Number.isFinite(sample.latitude)
    && sample.longitude! >= 70
    && sample.longitude! <= 140
    && sample.latitude! >= 10
    && sample.latitude! <= 60
}

export function resolveDistrictGeographicBounds(
  district: DistrictKey,
  communities: readonly CommunityValueSample[],
  paddingRatio = 0.06,
): GeographicBounds {
  const positioned = communities.filter((sample) => sample.district === district && hasGeographicCoordinate(sample))
  if (!positioned.length) return districtGeographicBounds[district]

  const longitudes = positioned.map((sample) => sample.longitude!)
  const latitudes = positioned.map((sample) => sample.latitude!)
  const west = Math.min(...longitudes)
  const east = Math.max(...longitudes)
  const south = Math.min(...latitudes)
  const north = Math.max(...latitudes)
  const longitudePadding = Math.max((east - west) * paddingRatio, 0.006)
  const latitudePadding = Math.max((north - south) * paddingRatio, 0.006)

  return [
    [west - longitudePadding, south - latitudePadding],
    [east + longitudePadding, north + latitudePadding],
  ]
}

export function buildCommunityFeatureCollection(
  communities: readonly CommunityValueSample[],
  scoreFor: (sample: CommunityValueSample) => number,
  tierFor: (sample: CommunityValueSample) => string,
): FeatureCollection<Point, CommunityMapProperties> {
  const features = communities
    .filter(hasGeographicCoordinate)
    .map<Feature<Point, CommunityMapProperties>>((sample) => ({
      type: 'Feature',
      id: sample.id,
      geometry: {
        type: 'Point',
        coordinates: [sample.longitude!, sample.latitude!],
      },
      properties: {
        id: sample.id,
        name: sample.name,
        score: scoreFor(sample),
        tier: tierFor(sample),
      },
    }))

  return { type: 'FeatureCollection', features }
}

const mercatorY = (latitude: number) => {
  const radians = latitude * Math.PI / 180
  return Math.log(Math.tan(Math.PI / 4 + radians / 2))
}

export function projectCoordinateToDistrictPercent(
  longitude: number,
  latitude: number,
  bounds: GeographicBounds,
) {
  const [[west, south], [east, north]] = bounds
  const x = (longitude - west) / Math.max(east - west, Number.EPSILON)
  const northY = mercatorY(north)
  const southY = mercatorY(south)
  const y = (northY - mercatorY(latitude)) / Math.max(northY - southY, Number.EPSILON)
  return {
    x: Math.min(100, Math.max(0, x * 100)),
    y: Math.min(100, Math.max(0, y * 100)),
  }
}
