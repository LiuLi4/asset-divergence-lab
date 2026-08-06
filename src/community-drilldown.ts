/* Drilldown interaction approach informed by three-scope-map.
 * 作者全平台ID：宋夏天Dazzle；公众号：送你整个夏天
 */
export interface MapViewPose {
  x: number
  y: number
  z: number
  scale: number
  positionX: number
  positionY: number
}

export interface CommunityMapPoint {
  x: number
  y: number
}

export interface CommunityMapViewport {
  centerX: number
  centerY: number
  zoom: number
}

export const defaultCommunityMapViewport: Readonly<CommunityMapViewport> = {
  centerX: 50,
  centerY: 50,
  zoom: 1,
}

const clamp = (value: number, minimum: number, maximum: number) => Math.min(maximum, Math.max(minimum, value))

export function resolveDistrictMapPose(
  focus: readonly [number, number],
  offset: readonly [number, number],
  viewportWidth: number,
): MapViewPose {
  return {
    x: focus[0],
    y: focus[1],
    z: -0.015,
    scale: viewportWidth < 600 ? 1.22 : 1.52,
    positionX: offset[0],
    positionY: offset[1],
  }
}

export function resolveCommunityDrillPose(
  districtPose: Readonly<MapViewPose>,
  point: Readonly<CommunityMapPoint>,
  viewportWidth: number,
  viewportZoom = 1.65,
): MapViewPose {
  const compact = viewportWidth < 600
  const horizontalFocus = clamp((50 - point.x) / 50, -1, 1)
  const verticalFocus = clamp((point.y - 50) / 50, -1, 1)
  const zoomProgress = clamp(viewportZoom - 1, 0, 2.2)
  const scaleFactor = 1 + zoomProgress * (compact ? 0.22 : 0.32)
  const translationFactor = 0.62 + zoomProgress * 0.38

  return {
    ...districtPose,
    scale: districtPose.scale * scaleFactor,
    positionX: districtPose.positionX + horizontalFocus * (compact ? 0.36 : 0.68) * translationFactor,
    positionY: districtPose.positionY + verticalFocus * (compact ? 0.26 : 0.48) * translationFactor,
  }
}

export function focusCommunityMapViewport(
  current: Readonly<CommunityMapViewport>,
  point: Readonly<CommunityMapPoint>,
): CommunityMapViewport {
  const zoomStops = [1.65, 2.35, 3.2]
  const zoom = zoomStops.find((stop) => stop > current.zoom + 0.01) ?? zoomStops[zoomStops.length - 1]
  return { centerX: point.x, centerY: point.y, zoom }
}

export function projectCommunityMapPoint(
  point: Readonly<CommunityMapPoint>,
  viewport: Readonly<CommunityMapViewport>,
): CommunityMapPoint {
  return {
    x: 50 + (point.x - viewport.centerX) * viewport.zoom,
    y: 50 + (point.y - viewport.centerY) * viewport.zoom,
  }
}

export function isCommunityMapPointVisible(point: Readonly<CommunityMapPoint>, margin = 4) {
  return point.x >= -margin && point.x <= 100 + margin && point.y >= -margin && point.y <= 100 + margin
}

export function applyMapViewPose(target: MapViewPose, pose: Readonly<MapViewPose>) {
  Object.assign(target, pose)
}
