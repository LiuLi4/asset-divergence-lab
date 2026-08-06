import { describe, expect, it } from 'vitest'
import { applyMapViewPose, resolveCommunityDrillPose, resolveDistrictMapPose } from './community-drilldown'

describe('community map drilldown poses', () => {
  it('preserves the district rotation while moving closer to the selected point', () => {
    const district = resolveDistrictMapPose([-0.1, -0.08], [1.35, -0.8], 1_440)
    const community = resolveCommunityDrillPose(district, { x: 20, y: 80 }, 1_440)

    expect(community).toMatchObject({ x: district.x, y: district.y, z: district.z })
    expect(community.scale).toBeGreaterThan(district.scale)
    expect(community.positionX).toBeGreaterThan(district.positionX)
    expect(community.positionY).toBeGreaterThan(district.positionY)
    expect(district).toEqual({ x: -0.1, y: -0.08, z: -0.015, scale: 1.52, positionX: 1.35, positionY: -0.8 })
  })

  it('uses a gentler bounded move on compact screens', () => {
    const district = resolveDistrictMapPose([0.015, 0.01], [0.1, -0.05], 390)
    const community = resolveCommunityDrillPose(district, { x: -500, y: 500 }, 390)

    expect(community.scale).toBeCloseTo(1.3664)
    expect(community.positionX - district.positionX).toBeCloseTo(0.36)
    expect(community.positionY - district.positionY).toBeCloseTo(0.26)
  })

  it('applies a complete pose transactionally', () => {
    const target = { x: 0, y: 0, z: 0, scale: 1, positionX: 0, positionY: 0 }
    const pose = resolveDistrictMapPose([0.025, 0.13], [-2.15, 0.05], 1_024)

    applyMapViewPose(target, pose)

    expect(target).toEqual(pose)
  })
})
