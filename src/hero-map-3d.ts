import * as THREE from 'three'
import {
  calculatePurchaseValue,
  getCommunitySamples,
  getPurchaseValueTier,
  purchaseValueBands,
  type CommunityValueSample,
  type DistrictKey,
  type PurchaseValueTier,
} from './community-value'

type ValueFilter = PurchaseValueTier | 'all'

type DistrictInfo = {
  name: string
  value: string
  note: string
  focus: [number, number]
  offset: [number, number]
  zones: string
  strength: string
  watch: string
}

const districts: Record<DistrictKey, DistrictInfo> = {
  haidian: { name: '海淀区', value: '+2.1%', note: '就业与教育资源密度较高，仍需逐小区核验楼龄和流动性。', focus: [-0.1, -0.08], offset: [1.35, -0.8], zones: '中关村 · 上地 · 西二旗', strength: '教育 / 科技就业', watch: '楼龄与流动性' },
  chaoyang: { name: '朝阳区', value: '+1.3%', note: '板块分化明显，核心就业半径与产品供给共同决定表现。', focus: [-0.02, 0.08], offset: [-1.35, -0.75], zones: '望京 · 朝青 · 双井', strength: '国际配套 / 就业', watch: '板块分化' },
  shijingshan: { name: '石景山区', value: '−3.6%', note: '示意压力情景，重点观察产业兑现、通勤与新增供给。', focus: [-0.04, -0.12], offset: [2.05, 0.05], zones: '古城 · 苹果园 · 鲁谷', strength: '更新空间 / 总价', watch: '产业兑现' },
  xicheng: { name: '西城区', value: '+3.4%', note: '核心区稀缺性较强，但高总价和具体房屋瑕疵仍需单独定价。', focus: [0.015, 0.01], offset: [0.1, -0.05], zones: '金融街 · 德胜 · 广安门', strength: '核心稀缺 / 配套', watch: '高总价与房况' },
  fengtai: { name: '丰台区', value: '+0.6%', note: '丽泽、总部基地等板块需要分别评估通勤、兑现节奏与新增供给。', focus: [-0.06, 0.025], offset: [0.65, 0.95], zones: '丽泽 · 总部基地 · 方庄', strength: '产业更新 / 交通', watch: '新增供给' },
  tongzhou: { name: '通州区', value: '−1.8%', note: '示意压力情景，公共服务兑现和跨区通勤是关键变量。', focus: [0.025, 0.13], offset: [-2.15, 0.05], zones: '运河商务区 · 梨园 · 台湖', strength: '副中心建设', watch: '跨区通勤' },
  daxing: { name: '大兴区', value: '−2.2%', note: '示意压力情景，板块距离、产业和同质供应会影响流动性。', focus: [0.08, 0.02], offset: [-0.65, 1.25], zones: '亦庄 · 西红门 · 黄村', strength: '产业 / 新城配套', watch: '同质供应' },
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export async function initHeroMap3d(host: HTMLElement) {
  const canvas = host.querySelector<HTMLCanvasElement>('#heroMapCanvas')
  const fallback = host.querySelector<HTMLImageElement>('.hero-map-fallback')
  const status = host.querySelector<HTMLElement>('#mapDistrictDetail')
  const statusTitle = host.querySelector<HTMLElement>('#mapDistrictTitle')
  const statusSummary = host.querySelector<HTMLElement>('#mapDistrictSummary')
  const statusStats = host.querySelector<HTMLElement>('#mapDistrictStats')
  const exitButton = host.querySelector<HTMLButtonElement>('#exitDistrictMap')
  const resetButton = host.querySelector<HTMLButtonElement>('#resetMapView')
  const interactionHint = host.querySelector<HTMLElement>('#mapInteractionHint')
  const communityLayer = host.querySelector<HTMLElement>('#communityValueLayer')
  const valueLegend = host.querySelector<HTMLElement>('#mapValueLegend')
  const textureUrl = host.dataset.texture

  if (!canvas || !textureUrl || !window.WebGLRenderingContext) {
    host.classList.add('map-3d-fallback')
    return () => undefined
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50)
  camera.position.set(0, 0.1, 13.2)

  const texture = await new THREE.TextureLoader().loadAsync(textureUrl)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())

  const aspect = texture.image.width / texture.image.height
  const map = new THREE.Mesh(
    new THREE.PlaneGeometry(11.25, 11.25 / aspect, 24, 16),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, alphaTest: 0.01, depthWrite: false }),
  )
  const mapGroup = new THREE.Group()
  mapGroup.add(map)
  mapGroup.rotation.set(-0.035, -0.055, -0.015)
  scene.add(mapGroup)

  const target = { x: -0.035, y: -0.055, z: -0.015, scale: 1, positionX: 0, positionY: 0 }
  const pointer = { x: 0, y: 0 }
  const drag = { active: false, moved: false, id: -1, startX: 0, startY: 0, rotationX: 0, rotationY: 0 }
  let disposed = false
  let visible = true
  let previousTime = performance.now()
  let activeDistrict: DistrictKey | null = null
  let activeCommunityId: string | null = null
  let activeValueFilter: ValueFilter = 'all'

  const render = (time = performance.now()) => {
    if (disposed) return
    const delta = Math.min((time - previousTime) / 1000, 0.05)
    previousTime = time
    const damping = reducedMotion ? 1 : 1 - Math.exp(-delta * 7.5)
    const hoverX = drag.active || reducedMotion ? 0 : pointer.y * 0.035
    const hoverY = drag.active || reducedMotion ? 0 : pointer.x * 0.065

    mapGroup.rotation.x += (target.x + hoverX - mapGroup.rotation.x) * damping
    mapGroup.rotation.y += (target.y + hoverY - mapGroup.rotation.y) * damping
    mapGroup.rotation.z += (target.z - mapGroup.rotation.z) * damping
    mapGroup.scale.lerp(new THREE.Vector3(target.scale, target.scale, target.scale), damping)
    mapGroup.position.x += (target.positionX - mapGroup.position.x) * damping
    mapGroup.position.y += (target.positionY - mapGroup.position.y) * damping
    if (!reducedMotion && !drag.active) map.position.y = Math.sin(time * 0.0007) * 0.025
    renderer.render(scene, camera)
  }

  const start = () => {
    if (disposed || !visible || document.hidden) return
    renderer.setAnimationLoop(render)
  }
  const stop = () => renderer.setAnimationLoop(null)

  const resize = () => {
    const width = Math.max(host.clientWidth, 1)
    const height = Math.max(host.clientHeight, 1)
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.position.z = width < 560 ? 14.6 : width < 900 ? 13.9 : 13.2
    camera.updateProjectionMatrix()
    render()
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(host)
  resize()

  const onPointerDown = (event: PointerEvent) => {
    if ((event.target as HTMLElement).closest('button')) return
    drag.active = true
    drag.moved = false
    drag.id = event.pointerId
    drag.startX = event.clientX
    drag.startY = event.clientY
    drag.rotationX = target.x
    drag.rotationY = target.y
    host.setPointerCapture(event.pointerId)
    host.classList.add('is-dragging')
  }
  const onPointerMove = (event: PointerEvent) => {
    const rect = host.getBoundingClientRect()
    pointer.x = clamp((event.clientX - rect.left) / rect.width * 2 - 1, -1, 1)
    pointer.y = clamp((event.clientY - rect.top) / rect.height * 2 - 1, -1, 1)
    if (!drag.active || event.pointerId !== drag.id) return
    const dx = event.clientX - drag.startX
    const dy = event.clientY - drag.startY
    drag.moved ||= Math.abs(dx) + Math.abs(dy) > 6
    target.y = clamp(drag.rotationY + dx * 0.0035, -0.3, 0.3)
    target.x = clamp(drag.rotationX - dy * 0.0028, -0.2, 0.16)
  }
  const finishDrag = (event: PointerEvent) => {
    if (!drag.active || event.pointerId !== drag.id) return
    drag.active = false
    host.classList.remove('is-dragging')
    if (host.hasPointerCapture(event.pointerId)) host.releasePointerCapture(event.pointerId)
  }
  const onPointerLeave = () => {
    if (!drag.active) {
      pointer.x = 0
      pointer.y = 0
    }
  }
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && host.classList.contains('district-detail-active')) {
      if (activeCommunityId && activeDistrict) {
        activeCommunityId = null
        renderCommunityMarkers(activeDistrict)
        showDistrictSummary(activeDistrict)
      } else {
        reset()
        host.focus()
      }
      event.preventDefault()
      return
    }
    const step = 0.035
    if (event.key === 'ArrowLeft') target.y = clamp(target.y - step, -0.3, 0.3)
    else if (event.key === 'ArrowRight') target.y = clamp(target.y + step, -0.3, 0.3)
    else if (event.key === 'ArrowUp') target.x = clamp(target.x - step, -0.2, 0.16)
    else if (event.key === 'ArrowDown') target.x = clamp(target.x + step, -0.2, 0.16)
    else return
    event.preventDefault()
  }

  const updateLegendState = () => {
    valueLegend?.querySelectorAll<HTMLButtonElement>('[data-value-filter]').forEach((button) => {
      const selected = button.dataset.valueFilter === activeValueFilter
      button.classList.toggle('active', selected)
      button.setAttribute('aria-pressed', String(selected))
    })
  }

  const renderCommunityMarkers = (key: DistrictKey) => {
    if (!communityLayer) return
    const samples = getCommunitySamples(key)
      .map((sample) => ({ sample, score: calculatePurchaseValue(sample) }))
      .sort((a, b) => b.score - a.score)

    communityLayer.innerHTML = samples.map(({ sample, score }, index) => {
      const tier = getPurchaseValueTier(score)
      const hidden = activeValueFilter !== 'all' && activeValueFilter !== tier
      const selected = activeCommunityId === sample.id
      return `<button class="community-value-marker tier-${tier}${selected ? ' active' : ''}" type="button" data-community-id="${sample.id}" style="--marker-x:${sample.position.x}%;--marker-y:${sample.position.y}%;--marker-order:${index}" aria-label="${sample.name}，购买价值${score}分，${purchaseValueBands[tier].label}" aria-pressed="${selected}"${hidden ? ' hidden' : ''}><span class="community-score">${score}</span><span class="community-marker-copy"><b>${sample.name}</b><small>同质折价 ${sample.adjustedDiscount >= 0 ? '+' : ''}${sample.adjustedDiscount.toFixed(1)}%</small></span></button>`
    }).join('')
    communityLayer.hidden = false
    if (valueLegend) valueLegend.hidden = false
    updateLegendState()
  }

  const showDistrictSummary = (key: DistrictKey) => {
    const info = districts[key]
    const samples = getCommunitySamples(key)
    const scores = samples.map(calculatePurchaseValue)
    const average = Math.round(scores.reduce((total, score) => total + score, 0) / Math.max(scores.length, 1))
    const strongCount = scores.filter((score) => getPurchaseValueTier(score) === 'strong').length
    if (status) {
      status.removeAttribute('data-value-tier')
      status.setAttribute('aria-label', `已进入${info.name}小区价值地图`)
    }
    if (statusTitle) statusTitle.innerHTML = `${info.name} · 小区价值<em>${average}分</em>`
    if (statusSummary) statusSummary.textContent = '点击彩色小区标记，查看质量、同质折价和成交样本。'
    if (statusStats) {
      statusStats.hidden = false
      statusStats.innerHTML = `<span><small>示例小区</small><b>${samples.length} 个</b></span><span><small>优先核验</small><b>${strongCount} 个</b></span><span><small>数据口径</small><b>演示模型 · 非实时</b></span>`
    }
  }

  const selectCommunity = (sample: CommunityValueSample) => {
    activeCommunityId = sample.id
    const score = calculatePurchaseValue(sample)
    const tier = getPurchaseValueTier(score)
    communityLayer?.querySelectorAll<HTMLButtonElement>('[data-community-id]').forEach((button) => {
      const selected = button.dataset.communityId === sample.id
      button.classList.toggle('active', selected)
      button.setAttribute('aria-pressed', String(selected))
    })
    if (status) {
      status.dataset.valueTier = tier
      status.setAttribute('aria-label', `${sample.name}购买价值详情`)
    }
    if (statusTitle) statusTitle.innerHTML = `${sample.name}<em>${score}分 · ${purchaseValueBands[tier].label}</em>`
    if (statusSummary) statusSummary.textContent = `${sample.zone} · 重点核验：${sample.watch}`
    if (statusStats) {
      statusStats.hidden = false
      statusStats.innerHTML = `<span><small>优质小区分</small><b>${sample.qualityScore} / 100</b></span><span><small>同质可比折价</small><b>${sample.adjustedDiscount >= 0 ? '+' : ''}${sample.adjustedDiscount.toFixed(1)}%</b></span><span><small>180天成交 / 可比样本</small><b>${sample.transactions180d} / ${sample.comparableSamples} 套</b></span>`
    }
  }

  const selectDistrict = (key: DistrictKey) => {
    const info = districts[key]
    activeDistrict = key
    activeCommunityId = null
    activeValueFilter = 'all'
    host.classList.add('district-detail-active')
    host.dataset.activeDistrict = key
    host.querySelectorAll<HTMLButtonElement>('[data-map-district]').forEach((button) => {
      const selected = button.dataset.mapDistrict === key
      button.classList.toggle('active', selected)
      button.setAttribute('aria-pressed', String(selected))
    })
    target.x = info.focus[0]
    target.y = info.focus[1]
    target.positionX = info.offset[0]
    target.positionY = info.offset[1]
    target.scale = host.clientWidth < 600 ? 1.22 : 1.52
    renderCommunityMarkers(key)
    showDistrictSummary(key)
    if (interactionHint) interactionHint.innerHTML = '<i class="ph ph-cursor-click"></i> 点击小区查看价值 · 拖拽旋转'
    if (exitButton) {
      exitButton.hidden = false
      exitButton.setAttribute('aria-hidden', 'false')
    }
  }

  const onMapClick = (event: Event) => {
    const targetElement = event.target as HTMLElement
    const communityButton = targetElement.closest<HTMLButtonElement>('[data-community-id]')
    if (communityButton && activeDistrict) {
      const sample = getCommunitySamples(activeDistrict).find((item) => item.id === communityButton.dataset.communityId)
      if (sample) selectCommunity(sample)
      return
    }
    const filterButton = targetElement.closest<HTMLButtonElement>('[data-value-filter]')
    if (filterButton && activeDistrict) {
      activeValueFilter = filterButton.dataset.valueFilter as ValueFilter
      const selectedSample = activeCommunityId
        ? getCommunitySamples(activeDistrict).find((sample) => sample.id === activeCommunityId)
        : undefined
      if (selectedSample && activeValueFilter !== 'all' && getPurchaseValueTier(calculatePurchaseValue(selectedSample)) !== activeValueFilter) {
        activeCommunityId = null
        showDistrictSummary(activeDistrict)
      }
      renderCommunityMarkers(activeDistrict)
      return
    }
    const districtButton = targetElement.closest<HTMLButtonElement>('[data-map-district]')
    if (districtButton) selectDistrict(districtButton.dataset.mapDistrict as DistrictKey)
  }
  const reset = () => {
    activeDistrict = null
    activeCommunityId = null
    activeValueFilter = 'all'
    host.classList.remove('district-detail-active')
    delete host.dataset.activeDistrict
    target.x = -0.035
    target.y = -0.055
    target.z = -0.015
    target.scale = 1
    target.positionX = 0
    target.positionY = 0
    host.querySelectorAll<HTMLButtonElement>('[data-map-district]').forEach((button) => {
      button.classList.remove('active')
      button.setAttribute('aria-pressed', 'false')
    })
    if (status) {
      status.removeAttribute('data-value-tier')
      status.setAttribute('aria-label', '北京核心区地图总览')
    }
    if (statusTitle) statusTitle.textContent = '北京 · 核心区'
    if (statusSummary) statusSummary.textContent = '点击区县进入区域地图，拖拽地图可调整视角。'
    if (statusStats) { statusStats.hidden = true; statusStats.innerHTML = '' }
    if (exitButton) {
      exitButton.hidden = true
      exitButton.setAttribute('aria-hidden', 'true')
    }
    if (communityLayer) { communityLayer.hidden = true; communityLayer.innerHTML = '' }
    if (valueLegend) valueLegend.hidden = true
    if (interactionHint) interactionHint.innerHTML = '<i class="ph ph-cursor-click"></i> 点击区县进入详情 · 拖拽旋转'
  }

  host.addEventListener('pointerdown', onPointerDown)
  host.addEventListener('pointermove', onPointerMove, { passive: true })
  host.addEventListener('pointerup', finishDrag)
  host.addEventListener('pointercancel', finishDrag)
  host.addEventListener('pointerleave', onPointerLeave)
  host.addEventListener('keydown', onKeyDown)
  host.addEventListener('click', onMapClick)
  resetButton?.addEventListener('click', reset)
  exitButton?.addEventListener('click', reset)

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) start()
    else stop()
  }, { rootMargin: '120px 0px' })
  intersectionObserver.observe(host)
  const onVisibilityChange = () => document.hidden ? stop() : start()
  document.addEventListener('visibilitychange', onVisibilityChange)

  fallback?.setAttribute('aria-hidden', 'true')
  host.classList.add('map-3d-ready')
  start()

  return () => {
    disposed = true
    stop()
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
    document.removeEventListener('visibilitychange', onVisibilityChange)
    host.removeEventListener('pointerdown', onPointerDown)
    host.removeEventListener('pointermove', onPointerMove)
    host.removeEventListener('pointerup', finishDrag)
    host.removeEventListener('pointercancel', finishDrag)
    host.removeEventListener('pointerleave', onPointerLeave)
    host.removeEventListener('keydown', onKeyDown)
    host.removeEventListener('click', onMapClick)
    resetButton?.removeEventListener('click', reset)
    exitButton?.removeEventListener('click', reset)
    map.geometry.dispose()
    ;(map.material as THREE.Material).dispose()
    texture.dispose()
    renderer.dispose()
  }
}
