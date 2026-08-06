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
): MapViewPose {
  const compact = viewportWidth < 600
  const horizontalFocus = clamp((50 - point.x) / 50, -1, 1)
  const verticalFocus = clamp((point.y - 50) / 50, -1, 1)

  return {
    ...districtPose,
    scale: districtPose.scale * (compact ? 1.12 : 1.2),
    positionX: districtPose.positionX + horizontalFocus * (compact ? 0.36 : 0.68),
    positionY: districtPose.positionY + verticalFocus * (compact ? 0.26 : 0.48),
  }
}

export function applyMapViewPose(target: MapViewPose, pose: Readonly<MapViewPose>) {
  Object.assign(target, pose)
}
