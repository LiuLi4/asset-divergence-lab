import * as THREE from 'three'
import {
  calculatePurchaseValue,
  communityValueSamples,
  getCommunitySamples,
  getPurchaseValueTier,
  parseCommunityValueDataset,
  purchaseValueBands,
  resolveCommunityPosition,
  type CommunityValueDataset,
  type CommunityValueSample,
  type DistrictKey,
  type PurchaseValueTier,
} from './community-value'

type CommunityMapTier = PurchaseValueTier | 'insufficient'
type ValueFilter = CommunityMapTier | 'all'

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
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
})[character]!)

const tierColour: Record<CommunityMapTier, string> = {
  strong: '#147a5d',
  watch: '#a66b16',
  cautious: '#b44b59',
  insufficient: '#786991',
}

const getCommunityTier = (sample: CommunityValueSample): CommunityMapTier => sample.dataStatus === 'insufficient'
  ? 'insufficient'
  : getPurchaseValueTier(calculatePurchaseValue(sample))

const unitPrice = (value: number) => value >= 10_000 ? `${(value / 10_000).toFixed(1)}万/㎡` : `${Math.round(value).toLocaleString('zh-CN')}元/㎡`

type CommunityDot = {
  sample: CommunityValueSample
  score: number
  tier: CommunityMapTier
  x: number
  y: number
}

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
  const communityDots = host.querySelector<HTMLCanvasElement>('#communityValueDots')
  const valueLegend = host.querySelector<HTMLElement>('#mapValueLegend')
  const dataMode = host.querySelector<HTMLElement>('#mapDataMode')
  const dataFile = host.querySelector<HTMLInputElement>('#communityDataFile')
  const dataImportStatus = host.querySelector<HTMLElement>('#communityDataStatus')
  const textureUrl = host.dataset.texture
  const communityDataUrl = host.dataset.communityValues

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
  let activeCommunities = communityValueSamples
  let activeDataset: CommunityValueDataset = {
    version: 1,
    label: '示例模型',
    updatedAt: '非实时成交',
    sourceName: '项目内置演示数据',
    communities: communityValueSamples,
  }
  let userImportedDataset = false
  let renderedDots: CommunityDot[] = []
  let redrawCommunityLayer = () => undefined

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
    const hostRect = host.getBoundingClientRect()
    host.style.setProperty('--map-viewport-center-offset', `${window.innerWidth / 2 - (hostRect.left + hostRect.width / 2)}px`)
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.position.z = width < 560 ? 14.6 : width < 900 ? 13.9 : 13.2
    camera.updateProjectionMatrix()
    redrawCommunityLayer()
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

  const getVisibleCommunityScores = (key: DistrictKey) => getCommunitySamples(key, activeCommunities)
    .map((sample) => {
      const score = calculatePurchaseValue(sample)
      return { sample, score, tier: getCommunityTier(sample), position: resolveCommunityPosition(sample) }
    })
    .filter(({ tier }) => activeValueFilter === 'all' || activeValueFilter === tier)
    .sort((a, b) => b.score - a.score)

  const drawCommunityDots = (key: DistrictKey) => {
    if (!communityDots) return
    const rect = communityDots.getBoundingClientRect()
    const width = Math.max(rect.width, 1)
    const height = Math.max(rect.height, 1)
    const pixelRatio = Math.min(window.devicePixelRatio, 2)
    const expectedWidth = Math.round(width * pixelRatio)
    const expectedHeight = Math.round(height * pixelRatio)
    if (communityDots.width !== expectedWidth || communityDots.height !== expectedHeight) {
      communityDots.width = expectedWidth
      communityDots.height = expectedHeight
    }
    const context = communityDots.getContext('2d')
    if (!context) return
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    context.clearRect(0, 0, width, height)

    const records = getVisibleCommunityScores(key)
    const radius = records.length > 1_000 ? 2.2 : records.length > 200 ? 2.8 : 3.8
    renderedDots = records.map(({ sample, score, tier, position }) => ({
      sample,
      score,
      tier,
      x: position.x / 100 * width,
      y: position.y / 100 * height,
    }))

    renderedDots.forEach((dot) => {
      const selected = dot.sample.id === activeCommunityId
      context.beginPath()
      context.arc(dot.x, dot.y, selected ? radius + 5 : radius + 2.5, 0, Math.PI * 2)
      context.fillStyle = selected ? 'rgba(255,255,255,0.94)' : 'rgba(255,255,255,0.62)'
      context.fill()
      context.beginPath()
      context.arc(dot.x, dot.y, selected ? radius + 1.5 : radius, 0, Math.PI * 2)
      context.fillStyle = tierColour[dot.tier]
      context.globalAlpha = selected ? 1 : 0.9
      context.fill()
      context.globalAlpha = 1
      if (selected) {
        context.strokeStyle = tierColour[dot.tier]
        context.lineWidth = 1.5
        context.stroke()
      }
    })
    communityDots.hidden = false
  }

  const chooseLabelledCommunities = (key: DistrictKey) => {
    const records = getVisibleCommunityScores(key)
    const limit = host.clientWidth < 600 ? 6 : host.clientWidth < 900 ? 10 : 18
    const selected = activeCommunityId ? records.find(({ sample }) => sample.id === activeCommunityId) : undefined
    const candidates = selected ? [selected, ...records.filter(({ sample }) => sample.id !== selected.sample.id)] : records
    const hostRect = host.getBoundingClientRect()
    const markerWidth = host.clientWidth < 600 ? 98 : 126
    const markerHeight = host.clientWidth < 600 ? 40 : 48
    const reserved = [valueLegend, status, host.querySelector('.map-label.active'), host.querySelector('.map-controls')]
      .map((element) => element?.getBoundingClientRect())
      .filter((rect): rect is DOMRect => Boolean(rect?.width && rect?.height))
    const labelledRects: Array<{ left: number; right: number; top: number; bottom: number }> = []
    return candidates.reduce<typeof records>((labels, record) => {
      if (labels.length >= limit) return labels
      const centreX = hostRect.left + record.position.x / 100 * hostRect.width
      const centreY = hostRect.top + record.position.y / 100 * hostRect.height
      const markerRect = {
        left: centreX - markerWidth / 2,
        right: centreX + markerWidth / 2,
        top: centreY - markerHeight / 2,
        bottom: centreY + markerHeight / 2,
      }
      const overlaps = (other: { left: number; right: number; top: number; bottom: number }) => (
        markerRect.left < other.right + 4
        && markerRect.right > other.left - 4
        && markerRect.top < other.bottom + 4
        && markerRect.bottom > other.top - 4
      )
      if (!reserved.some(overlaps) && !labelledRects.some(overlaps)) {
        labels.push(record)
        labelledRects.push(markerRect)
      }
      return labels
    }, [])
  }

  const renderCommunityMarkers = (key: DistrictKey) => {
    drawCommunityDots(key)
    if (!communityLayer) return
    if (valueLegend) valueLegend.hidden = false
    const samples = chooseLabelledCommunities(key)
    communityLayer.innerHTML = samples.map(({ sample, score, tier, position }, index) => {
      const selected = activeCommunityId === sample.id
      const id = escapeHtml(sample.id)
      const name = escapeHtml(sample.name)
      const tierLabel = tier === 'insufficient' ? '数据不足，暂不评分' : `购买价值${score}分，${purchaseValueBands[tier].label}`
      const markerValue = tier === 'insufficient' ? '—' : score
      const markerNote = tier === 'insufficient' ? '近期成交或可比不足' : `同质折价 ${sample.adjustedDiscount >= 0 ? '+' : ''}${sample.adjustedDiscount.toFixed(1)}%`
      return `<button class="community-value-marker tier-${tier}${selected ? ' active' : ''}" type="button" data-community-id="${id}" style="--marker-x:${position.x}%;--marker-y:${position.y}%;--marker-order:${index}" aria-label="${name}，${tierLabel}" aria-pressed="${selected}"><span class="community-score">${markerValue}</span><span class="community-marker-copy"><b>${name}</b><small>${markerNote}</small></span></button>`
    }).join('')
    communityLayer.hidden = false
    updateLegendState()
  }

  redrawCommunityLayer = () => {
    if (activeDistrict) renderCommunityMarkers(activeDistrict)
  }

  const showDistrictSummary = (key: DistrictKey) => {
    const info = districts[key]
    const samples = getCommunitySamples(key, activeCommunities)
    const scoredSamples = samples.filter((sample) => sample.dataStatus !== 'insufficient')
    const scores = scoredSamples.map(calculatePurchaseValue)
    const average = Math.round(scores.reduce((total, score) => total + score, 0) / Math.max(scores.length, 1))
    const strongCount = scores.filter((score) => getPurchaseValueTier(score) === 'strong').length
    const insufficientCount = samples.length - scoredSamples.length
    if (status) {
      status.removeAttribute('data-value-tier')
      status.setAttribute('aria-label', `已进入${info.name}小区价值地图`)
    }
    if (statusTitle) statusTitle.innerHTML = `${info.name} · 小区价值<em>${scores.length ? `${average}分` : '暂无评分'}</em>`
    if (statusSummary) statusSummary.textContent = '有成交证据的小区按分数着色；灰色表示近期成交或同质可比不足。点击任一点位查看明细。'
    if (statusStats) {
      statusStats.hidden = false
      statusStats.innerHTML = `<span><small>全部 / 已评分</small><b>${samples.length.toLocaleString('zh-CN')} / ${scoredSamples.length.toLocaleString('zh-CN')}</b></span><span><small>优先核验 / 数据不足</small><b>${strongCount.toLocaleString('zh-CN')} / ${insufficientCount.toLocaleString('zh-CN')}</b></span><span><small>数据来源</small><b>${escapeHtml(activeDataset.sourceName)}</b></span>`
    }
  }

  const selectCommunity = (sample: CommunityValueSample) => {
    activeCommunityId = sample.id
    const score = calculatePurchaseValue(sample)
    const tier = getCommunityTier(sample)
    communityLayer?.querySelectorAll<HTMLButtonElement>('[data-community-id]').forEach((button) => {
      const selected = button.dataset.communityId === sample.id
      button.classList.toggle('active', selected)
      button.setAttribute('aria-pressed', String(selected))
    })
    if (status) {
      status.dataset.valueTier = tier
      status.setAttribute('aria-label', `${sample.name}购买价值详情`)
    }
    if (statusTitle) statusTitle.innerHTML = tier === 'insufficient'
      ? `${escapeHtml(sample.name)}<em>数据不足 · 暂不评分</em>`
      : `${escapeHtml(sample.name)}<em>${score}分 · ${purchaseValueBands[tier].label}</em>`
    if (statusSummary) statusSummary.textContent = `${sample.zone} · 重点核验：${sample.watch}`
    if (statusStats) {
      statusStats.hidden = false
      const priceEvidence = sample.latestUnitPrice && sample.nearbyMedianUnitPrice
        ? `<span><small>最新成交 / 周边中位</small><b>${unitPrice(sample.latestUnitPrice)} / ${unitPrice(sample.nearbyMedianUnitPrice)}</b></span>`
        : sample.latestUnitPrice
          ? `<span><small>最新成交 / 周边中位</small><b>${unitPrice(sample.latestUnitPrice)} / 样本不足</b></span>`
          : `<span><small>参考价 / 最新成交</small><b>${sample.referenceUnitPrice ? unitPrice(sample.referenceUnitPrice) : '暂无'} / 暂无</b></span>`
      const evidenceValue = tier === 'insufficient'
        ? `暂不计算 · ${sample.transactions180d} / ${sample.comparableSamples}`
        : `${sample.adjustedDiscount >= 0 ? '+' : ''}${sample.adjustedDiscount.toFixed(1)}% · ${sample.transactions180d} / ${sample.comparableSamples}`
      statusStats.innerHTML = `<span><small>优质小区分</small><b>${sample.qualityScore} / 100</b></span>${priceEvidence}<span><small>折价 · 180天成交 / 可比</small><b>${evidenceValue}</b></span>`
    }
    renderCommunityMarkers(sample.district)
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
    if (drag.moved) return
    const targetElement = event.target as HTMLElement
    const communityButton = targetElement.closest<HTMLButtonElement>('[data-community-id]')
    if (communityButton && activeDistrict) {
      const sample = getCommunitySamples(activeDistrict, activeCommunities).find((item) => item.id === communityButton.dataset.communityId)
      if (sample) selectCommunity(sample)
      return
    }
    if (targetElement === communityDots && activeDistrict) {
      const pointerEvent = event as PointerEvent
      const rect = communityDots.getBoundingClientRect()
      const x = pointerEvent.clientX - rect.left
      const y = pointerEvent.clientY - rect.top
      const closest = renderedDots.reduce<{ dot: CommunityDot; distance: number } | null>((result, dot) => {
        const distance = Math.hypot(dot.x - x, dot.y - y)
        return !result || distance < result.distance ? { dot, distance } : result
      }, null)
      if (closest && closest.distance <= 15) selectCommunity(closest.dot.sample)
      return
    }
    const filterButton = targetElement.closest<HTMLButtonElement>('[data-value-filter]')
    if (filterButton && activeDistrict) {
      activeValueFilter = filterButton.dataset.valueFilter as ValueFilter
      const selectedSample = activeCommunityId
        ? getCommunitySamples(activeDistrict, activeCommunities).find((sample) => sample.id === activeCommunityId)
        : undefined
      if (selectedSample && activeValueFilter !== 'all' && getCommunityTier(selectedSample) !== activeValueFilter) {
        activeCommunityId = null
        showDistrictSummary(activeDistrict)
      }
      renderCommunityMarkers(activeDistrict)
      return
    }
    const districtButton = targetElement.closest<HTMLButtonElement>('[data-map-district]')
    if (districtButton) selectDistrict(districtButton.dataset.mapDistrict as DistrictKey)
  }

  const importCommunityData = async () => {
    const file = dataFile?.files?.[0]
    if (!file) return
    if (dataImportStatus) dataImportStatus.textContent = '正在校验…'
    try {
      const dataset = parseCommunityValueDataset(JSON.parse(await file.text()))
      userImportedDataset = true
      activeDataset = dataset
      activeCommunities = dataset.communities
      activeCommunityId = null
      activeValueFilter = 'all'
      if (dataMode) dataMode.textContent = `${dataset.label} · ${dataset.communities.length.toLocaleString('zh-CN')} 个`
      if (dataImportStatus) dataImportStatus.textContent = '已在本地加载，不会上传'
      if (activeDistrict) {
        renderCommunityMarkers(activeDistrict)
        showDistrictSummary(activeDistrict)
      }
    } catch (error) {
      if (dataImportStatus) dataImportStatus.textContent = error instanceof Error ? `导入失败：${error.message}` : '导入失败：文件格式错误'
    } finally {
      if (dataFile) dataFile.value = ''
    }
  }

  const loadDefaultCommunityData = async () => {
    if (!communityDataUrl) return
    if (dataMode) dataMode.textContent = '授权数据加载中…'
    try {
      const response = await fetch(communityDataUrl)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const dataset = parseCommunityValueDataset(await response.json())
      if (disposed || userImportedDataset) return
      activeDataset = dataset
      activeCommunities = dataset.communities
      activeCommunityId = null
      activeValueFilter = 'all'
      host.dataset.communityDataReady = 'true'
      if (dataMode) {
        dataMode.textContent = `${dataset.label} · ${dataset.communities.length.toLocaleString('zh-CN')} 个`
        dataMode.title = dataset.sourceUrl ? `${dataset.sourceName} · ${dataset.sourceUrl}` : dataset.sourceName
      }
      if (dataImportStatus) dataImportStatus.textContent = `${dataset.sourceName} · 已授权发布`
      if (activeDistrict) {
        renderCommunityMarkers(activeDistrict)
        showDistrictSummary(activeDistrict)
      }
    } catch (error) {
      host.dataset.communityDataReady = 'fallback'
      if (dataMode) dataMode.textContent = '示例模型 · 28 个'
      if (dataImportStatus) dataImportStatus.textContent = '正式数据加载失败，当前显示示例'
      console.warn('小区购买价值数据加载失败，已回退到演示数据', error)
    }
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
    if (communityDots) {
      communityDots.hidden = true
      communityDots.getContext('2d')?.clearRect(0, 0, communityDots.width, communityDots.height)
    }
    renderedDots = []
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
  dataFile?.addEventListener('change', importCommunityData)
  void loadDefaultCommunityData()

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
    dataFile?.removeEventListener('change', importCommunityData)
    map.geometry.dispose()
    ;(map.material as THREE.Material).dispose()
    texture.dispose()
    renderer.dispose()
  }
}
