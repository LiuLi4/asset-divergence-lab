import * as THREE from 'three'
import {
  applyMapViewPose,
  defaultCommunityMapViewport,
  focusCommunityMapViewport,
  isCommunityMapPointVisible,
  projectCommunityMapPoint,
  resolveCommunityDrillPose,
  resolveDistrictMapPose,
  type CommunityMapViewport,
  type MapViewPose,
} from './community-drilldown'
import { buildCommunityLocationContext } from './community-map-context'
import { getCommunityNavigationState, navigateCommunitySelection, type CommunityNavigationDirection } from './community-navigation'
import {
  calculatePurchaseValue,
  communityValueSamples,
  formatDataDate,
  getCommunitySamples,
  getCommunityScoreBreakdown,
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
  note: string
  focus: [number, number]
  offset: [number, number]
  zones: string
  strength: string
  watch: string
}

const districts: Record<DistrictKey, DistrictInfo> = {
  haidian: { name: '海淀区', note: '就业与教育资源密度较高，仍需逐小区核验楼龄和流动性。', focus: [-0.1, -0.08], offset: [1.35, -0.8], zones: '中关村 · 上地 · 西二旗', strength: '教育 / 科技就业', watch: '楼龄与流动性' },
  chaoyang: { name: '朝阳区', note: '板块分化明显，核心就业半径与产品供给共同决定表现。', focus: [-0.02, 0.08], offset: [-1.35, -0.75], zones: '望京 · 朝青 · 双井', strength: '国际配套 / 就业', watch: '板块分化' },
  shijingshan: { name: '石景山区', note: '重点观察产业兑现、通勤与新增供给。', focus: [-0.04, -0.12], offset: [2.05, 0.05], zones: '古城 · 苹果园 · 鲁谷', strength: '更新空间 / 总价', watch: '产业兑现' },
  xicheng: { name: '西城区', note: '核心区稀缺性较强，但高总价和具体房屋瑕疵仍需单独定价。', focus: [0.015, 0.01], offset: [0.1, -0.05], zones: '金融街 · 德胜 · 广安门', strength: '核心稀缺 / 配套', watch: '高总价与房况' },
  fengtai: { name: '丰台区', note: '丽泽、总部基地等板块需要分别评估通勤、兑现节奏与新增供给。', focus: [-0.06, 0.025], offset: [0.65, 0.95], zones: '丽泽 · 总部基地 · 方庄', strength: '产业更新 / 交通', watch: '新增供给' },
  tongzhou: { name: '通州区', note: '公共服务兑现和跨区通勤是关键变量。', focus: [0.025, 0.13], offset: [-2.15, 0.05], zones: '运河商务区 · 梨园 · 台湖', strength: '副中心建设', watch: '跨区通勤' },
  daxing: { name: '大兴区', note: '板块距离、产业和同质供应会影响流动性。', focus: [0.08, 0.02], offset: [-0.65, 1.25], zones: '亦庄 · 西红门 · 黄村', strength: '产业 / 新城配套', watch: '同质供应' },
}

export function resolveCommunityCanvasSize(width: number, height: number, devicePixelRatio: number) {
  const pixelRatio = Math.min(Math.max(devicePixelRatio, 1), 2)
  return {
    cssWidth: Math.max(width, 1),
    cssHeight: Math.max(height, 1),
    pixelRatio,
    width: Math.round(Math.max(width, 1) * pixelRatio),
    height: Math.round(Math.max(height, 1) * pixelRatio),
  }
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

type CommunityScoreRecord = {
  sample: CommunityValueSample
  score: number
  tier: CommunityMapTier
  sourcePosition: { x: number; y: number }
  position: { x: number; y: number }
}

export function findClosestCommunityDot<T extends { x: number; y: number }>(dots: T[], x: number, y: number, maxDistance = 15) {
  const closest = dots.reduce<{ dot: T; distance: number } | null>((result, dot) => {
    const distance = Math.hypot(dot.x - x, dot.y - y)
    return !result || distance < result.distance ? { dot, distance } : result
  }, null)
  return closest && closest.distance <= maxDistance ? closest.dot : null
}

export async function initHeroMap3d(host: HTMLElement) {
  const canvas = host.querySelector<HTMLCanvasElement>('#heroMapCanvas')
  const fallback = host.querySelector<HTMLImageElement>('.hero-map-fallback')
  const status = host.querySelector<HTMLElement>('#mapDistrictDetail')
  const statusTitle = host.querySelector<HTMLElement>('#mapDistrictTitle')
  const statusSummary = host.querySelector<HTMLElement>('#mapDistrictSummary')
  const statusStats = host.querySelector<HTMLElement>('#mapDistrictStats')
  const exitButton = host.querySelector<HTMLButtonElement>('#exitDistrictMap')
  const workspaceExitButton = host.querySelector<HTMLButtonElement>('#exitMapWorkspace')
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
  let pageScrollY = 0
  let mapWorkspaceAnchor: Comment | null = null

  const enterMapWorkspace = () => {
    if (host.classList.contains('map-workspace-active')) return
    pageScrollY = window.scrollY
    mapWorkspaceAnchor = document.createComment('map-workspace-anchor')
    host.parentNode?.insertBefore(mapWorkspaceAnchor, host)
    document.body.append(host)
    document.documentElement.classList.add('map-workspace-open')
    document.body.classList.add('map-workspace-open')
    host.classList.add('map-workspace-active')
    host.setAttribute('role', 'dialog')
    host.setAttribute('aria-modal', 'true')
    host.setAttribute('aria-label', '北京小区价值全屏地图')
    if (workspaceExitButton) {
      workspaceExitButton.hidden = false
      workspaceExitButton.setAttribute('aria-hidden', 'false')
    }
    requestAnimationFrame(() => {
      resize()
      start()
      host.focus({ preventScroll: true })
    })
  }

  const exitMapWorkspace = () => {
    if (!host.classList.contains('map-workspace-active')) return
    reset()
    host.classList.remove('map-workspace-active')
    host.removeAttribute('role')
    host.removeAttribute('aria-modal')
    host.setAttribute('aria-label', '可交互的北京核心区三维地图')
    if (mapWorkspaceAnchor?.parentNode) {
      mapWorkspaceAnchor.parentNode.insertBefore(host, mapWorkspaceAnchor)
      mapWorkspaceAnchor.remove()
      mapWorkspaceAnchor = null
    }
    document.documentElement.classList.remove('map-workspace-open')
    document.body.classList.remove('map-workspace-open')
    if (workspaceExitButton) {
      workspaceExitButton.hidden = true
      workspaceExitButton.setAttribute('aria-hidden', 'true')
    }
    requestAnimationFrame(() => {
      resize()
      window.scrollTo({ top: pageScrollY, behavior: 'instant' })
      host.focus({ preventScroll: true })
    })
  }

  const localMap = document.createElement('section')
  localMap.className = 'community-local-map'
  localMap.setAttribute('aria-label', '所选小区的道路与周边公开地图')
  localMap.setAttribute('aria-busy', 'false')
  localMap.hidden = true
  localMap.innerHTML = '<div class="community-local-map-frames"></div><div class="community-drill-progress" aria-live="polite"><i class="ph ph-navigation-arrow" aria-hidden="true"></i><span>正在下钻到小区周边</span></div><span><i class="ph ph-map-pin" aria-hidden="true"></i> 道路与公开配套 · OpenStreetMap</span>'
  host.querySelector('.map-hotspots')?.before(localMap)
  const localMapFrames = localMap.querySelector<HTMLElement>('.community-local-map-frames')

  const drillIndicator = document.createElement('div')
  drillIndicator.className = 'community-drill-indicator'
  drillIndicator.hidden = true
  drillIndicator.innerHTML = '<i aria-hidden="true"></i><span>正在下钻</span>'
  localMap.before(drillIndicator)

  const communityLocation = document.createElement('section')
  communityLocation.className = 'community-location-context'
  communityLocation.setAttribute('aria-label', '小区位置和周边参照')
  communityLocation.hidden = true
  status?.append(communityLocation)

  const communityStepper = document.createElement('nav')
  communityStepper.className = 'community-stepper'
  communityStepper.dataset.communityNavigator = 'true'
  communityStepper.setAttribute('aria-label', '逐个切换当前筛选结果中的小区')
  communityStepper.hidden = true
  communityStepper.innerHTML = '<button type="button" data-community-direction="previous" aria-label="上一个小区"><i class="ph ph-arrow-up" aria-hidden="true"></i></button><output aria-live="polite">— / 0</output><button type="button" data-community-direction="next" aria-label="下一个小区"><i class="ph ph-arrow-down" aria-hidden="true"></i></button>'
  statusStats?.before(communityStepper)
  const communityStepOutput = communityStepper.querySelector<HTMLOutputElement>('output')

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

  const target: MapViewPose = { x: -0.035, y: -0.055, z: -0.015, scale: 1, positionX: 0, positionY: 0 }
  const pointer = { x: 0, y: 0 }
  const drag = { active: false, moved: false, id: -1, startX: 0, startY: 0, rotationX: 0, rotationY: 0 }
  let disposed = false
  let visible = true
  let previousTime = performance.now()
  let activeDistrict: DistrictKey | null = null
  let activeCommunityId: string | null = null
  let activeValueFilter: ValueFilter = 'all'
  let communityViewport: CommunityMapViewport = { ...defaultCommunityMapViewport }
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
  let updateCommunityNavigator: (records?: CommunityScoreRecord[]) => void = () => undefined
  let activeLocalMapFrame: HTMLIFrameElement | null = null
  let drillRequestId = 0
  let drillCleanupTimer = 0
  let drillCommitTimer = 0
  let osmPreconnected = false
  let returnToDistrictView = () => undefined
  const communityRecordCache = new Map<DistrictKey, Omit<CommunityScoreRecord, 'position'>[]>()

  const clearDrillTimers = () => {
    window.clearTimeout(drillCleanupTimer)
    window.clearTimeout(drillCommitTimer)
  }

  const finishClosingCommunityLocation = (preserveDetails = false) => {
    host.classList.remove('community-location-active', 'community-drill-approaching', 'community-drill-entering', 'community-drill-returning', 'community-vicinity-switching')
    localMap.hidden = true
    localMap.setAttribute('aria-busy', 'false')
    if (!preserveDetails) communityLocation.hidden = true
    drillIndicator.hidden = true
    localMapFrames?.replaceChildren()
    activeLocalMapFrame = null
  }

  const closeCommunityLocation = (animate = false, preserveDetails = false) => {
    drillRequestId += 1
    clearDrillTimers()
    if (animate && host.classList.contains('community-location-active') && !reducedMotion) {
      host.classList.remove('community-location-active', 'community-drill-entering', 'community-vicinity-switching')
      host.classList.add('community-drill-returning')
      localMap.setAttribute('aria-busy', 'false')
      communityLocation.hidden = !preserveDetails
      drillIndicator.hidden = true
      drillCleanupTimer = window.setTimeout(() => finishClosingCommunityLocation(preserveDetails), 460)
      return
    }
    finishClosingCommunityLocation(preserveDetails)
  }

  const preconnectOpenStreetMap = () => {
    if (osmPreconnected) return
    osmPreconnected = true
    const connectionHint = document.createElement('link')
    connectionHint.rel = 'preconnect'
    connectionHint.href = 'https://www.openstreetmap.org'
    connectionHint.crossOrigin = 'anonymous'
    document.head.append(connectionHint)
  }

  const createLocalMapFrame = (title: string) => {
    const frame = document.createElement('iframe')
    frame.className = 'community-local-map-frame is-pending'
    frame.loading = 'eager'
    frame.referrerPolicy = 'strict-origin-when-cross-origin'
    frame.title = title
    return frame
  }

  const loadCommunityVicinityMap = (sample: CommunityValueSample, embedUrl: string) => {
    if (!localMapFrames) return
    preconnectOpenStreetMap()
    const requestId = ++drillRequestId
    const switching = host.classList.contains('community-location-active')
    const point = resolveCommunityPosition(sample)
    const districtInfo = districts[sample.district]
    const districtPose = resolveDistrictMapPose(districtInfo.focus, districtInfo.offset, host.clientWidth)
    const drillPose = resolveCommunityDrillPose(districtPose, point, host.clientWidth, Math.max(communityViewport.zoom, 2.35))
    const startedAt = performance.now()
    const pendingFrame = createLocalMapFrame(`${sample.name}周边道路与公开配套地图`)
    const progressLabel = localMap.querySelector<HTMLElement>('.community-drill-progress span')

    clearDrillTimers()
    localMapFrames.querySelectorAll('.is-pending, .is-exiting').forEach((frame) => frame.remove())
    localMap.hidden = false
    localMap.setAttribute('aria-busy', 'true')
    if (progressLabel) progressLabel.textContent = `正在下钻到${sample.name}周边`
    drillIndicator.style.setProperty('--drill-x', `${point.x}%`)
    drillIndicator.style.setProperty('--drill-y', `${point.y}%`)
    const indicatorLabel = drillIndicator.querySelector<HTMLElement>('span')
    if (indicatorLabel) indicatorLabel.textContent = `下钻 ${sample.name}`

    if (switching) {
      host.classList.add('community-vicinity-switching')
    } else {
      drillIndicator.hidden = false
      host.classList.add('community-drill-approaching')
      applyMapViewPose(target, drillPose)
    }

    localMapFrames.append(pendingFrame)

    let committed = false
    const commitFrame = () => {
      if (committed || requestId !== drillRequestId) return
      const minimumApproachMs = switching || reducedMotion ? 0 : 520
      const remaining = Math.max(0, minimumApproachMs - (performance.now() - startedAt))
      window.clearTimeout(drillCommitTimer)
      drillCommitTimer = window.setTimeout(() => {
        if (requestId !== drillRequestId) return
        committed = true
        const previousFrame = activeLocalMapFrame
        activeLocalMapFrame = pendingFrame
        pendingFrame.classList.remove('is-pending')
        pendingFrame.classList.add('is-current')
        previousFrame?.classList.add('is-exiting')
        host.classList.remove('community-drill-approaching')
        host.classList.add('community-location-active', 'community-drill-entering')
        localMap.setAttribute('aria-busy', 'false')
        drillIndicator.hidden = true
        drillCleanupTimer = window.setTimeout(() => {
          if (requestId !== drillRequestId) return
          localMapFrames.querySelectorAll('iframe').forEach((frame) => {
            if (frame !== activeLocalMapFrame) frame.remove()
          })
          host.classList.remove('community-drill-entering', 'community-vicinity-switching')
        }, reducedMotion ? 0 : 460)
      }, remaining)
    }

    pendingFrame.addEventListener('load', commitFrame, { once: true })
    pendingFrame.src = embedUrl
    drillCommitTimer = window.setTimeout(commitFrame, 3_200)
  }

  const updateDatasetPresentation = (dataset: CommunityValueDataset) => {
    const dataDate = formatDataDate(dataset.updatedAt)
    const total = dataset.communities.length.toLocaleString('zh-CN')
    if (dataMode) dataMode.textContent = `成交数据截至 ${dataDate} · ${total} 个小区`
    if (!activeDistrict && statusSummary) statusSummary.textContent = `成交数据截至 ${dataDate} · 共可查看 ${total} 个小区，点击区县进入详情。`
    host.querySelectorAll<HTMLButtonElement>('[data-map-district]').forEach((button) => {
      const key = button.dataset.mapDistrict as DistrictKey
      const count = getCommunitySamples(key, dataset.communities).length
      const countLabel = button.querySelector<HTMLElement>('[data-district-community-count]')
      if (countLabel) countLabel.textContent = `${count.toLocaleString('zh-CN')} 个`
      button.setAttribute('aria-label', `进入${districts[key].name}区域地图，可查看${count.toLocaleString('zh-CN')}个小区，数据截至${dataDate}`)
    })
  }

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
    if ((event.target as HTMLElement).closest('button')) {
      drag.moved = false
      return
    }
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
    if (event.key === 'Escape' && host.classList.contains('map-workspace-active')) {
      if (activeCommunityId && activeDistrict) {
        returnToDistrictView()
      } else if (host.classList.contains('district-detail-active')) {
        reset()
        host.focus()
      } else {
        exitMapWorkspace()
      }
      event.preventDefault()
      return
    }
    if ((event.key === 'Enter' || event.key === ' ') && !host.classList.contains('map-workspace-active')) {
      enterMapWorkspace()
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

  const getCommunityScoreRecords = (key: DistrictKey) => {
    const cached = communityRecordCache.get(key)
    if (cached) return cached
    const records = getCommunitySamples(key, activeCommunities).map((sample) => ({
      sample,
      score: calculatePurchaseValue(sample),
      tier: getCommunityTier(sample),
      sourcePosition: resolveCommunityPosition(sample),
    })).sort((a, b) => b.score - a.score)
    communityRecordCache.set(key, records)
    return records
  }

  const getVisibleCommunityScores = (key: DistrictKey): CommunityScoreRecord[] => getCommunityScoreRecords(key)
    .filter(({ tier }) => activeValueFilter === 'all' || activeValueFilter === tier)
    .map((record) => ({
      ...record,
      position: projectCommunityMapPoint(record.sourcePosition, communityViewport),
    }))

  updateCommunityNavigator = (records = activeDistrict ? getVisibleCommunityScores(activeDistrict) : []) => {
    if (!activeDistrict) {
      communityStepper.hidden = true
      return
    }
    const communities = records.map(({ sample }) => sample)
    const navigation = getCommunityNavigationState(communities, activeCommunityId)
    communityStepper.hidden = false
    if (communityStepOutput) communityStepOutput.value = navigation.positionLabel
    communityStepper.querySelectorAll<HTMLButtonElement>('button').forEach((button) => {
      button.disabled = navigation.total === 0
    })
  }

  const navigateCommunity = (direction: CommunityNavigationDirection) => {
    if (!activeDistrict) return
    const communities = getVisibleCommunityScores(activeDistrict).map(({ sample }) => sample)
    const navigation = navigateCommunitySelection(communities, activeCommunityId, direction)
    if (navigation.community) selectCommunity(navigation.community, host.classList.contains('community-location-active'))
    else updateCommunityNavigator()
  }

  const drawCommunityDots = (records: CommunityScoreRecord[]) => {
    if (!communityDots) return
    const size = resolveCommunityCanvasSize(host.clientWidth, host.clientHeight, window.devicePixelRatio)
    if (communityDots.width !== size.width || communityDots.height !== size.height) {
      communityDots.width = size.width
      communityDots.height = size.height
    }
    const context = communityDots.getContext('2d', { alpha: true })
    if (!context) return
    context.setTransform(size.pixelRatio, 0, 0, size.pixelRatio, 0, 0)
    context.clearRect(0, 0, size.cssWidth, size.cssHeight)

    const radius = (records.length > 1_000 ? 2.2 : records.length > 200 ? 2.8 : 3.8) + Math.min(communityViewport.zoom - 1, 1.4) * 0.75
    renderedDots = records.map(({ sample, score, tier, position }) => ({
      sample,
      score,
      tier,
      x: position.x / 100 * size.cssWidth,
      y: position.y / 100 * size.cssHeight,
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

  const chooseLabelledCommunities = (records: CommunityScoreRecord[]) => {
    const visibleRecords = records.filter(({ position }) => isCommunityMapPointVisible(position, 2))
    const limit = host.clientWidth < 600 ? 6 : host.clientWidth < 900 ? 10 : 18
    const selected = activeCommunityId ? visibleRecords.find(({ sample }) => sample.id === activeCommunityId) : undefined
    const candidates = selected ? [selected, ...visibleRecords.filter(({ sample }) => sample.id !== selected.sample.id)] : visibleRecords
    const hostRect = host.getBoundingClientRect()
    const markerWidth = host.clientWidth < 600 ? 98 : 126
    const markerHeight = host.clientWidth < 600 ? 40 : 48
    const reserved = [valueLegend, status, host.querySelector('.map-label.active'), host.querySelector('.map-controls')]
      .map((element) => element?.getBoundingClientRect())
      .filter((rect): rect is DOMRect => Boolean(rect?.width && rect?.height))
    const labelledRects: Array<{ left: number; right: number; top: number; bottom: number }> = []
    return candidates.reduce<typeof visibleRecords>((labels, record) => {
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
    const records = getVisibleCommunityScores(key)
    drawCommunityDots(records)
    if (!communityLayer) return
    if (valueLegend) valueLegend.hidden = false
    const samples = chooseLabelledCommunities(records)
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
    updateCommunityNavigator(records)
  }

  redrawCommunityLayer = () => {
    if (activeDistrict) renderCommunityMarkers(activeDistrict)
  }

  const showDistrictSummary = (key: DistrictKey, closeLocation = true) => {
    if (closeLocation) closeCommunityLocation()
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
    if (statusSummary) statusSummary.textContent = `成交数据截至 ${formatDataDate(activeDataset.updatedAt)}。有成交证据的小区按分数着色；灰色表示近期成交或同质可比不足。`
    if (statusStats) {
      statusStats.hidden = false
      statusStats.innerHTML = `<span><small>全部 / 已评分</small><b>${samples.length.toLocaleString('zh-CN')} / ${scoredSamples.length.toLocaleString('zh-CN')}</b></span><span><small>优先核验 / 数据不足</small><b>${strongCount.toLocaleString('zh-CN')} / ${insufficientCount.toLocaleString('zh-CN')}</b></span><span><small>数据截至 / 来源</small><b>${formatDataDate(activeDataset.updatedAt)} · ${escapeHtml(activeDataset.sourceName)}</b></span>`
    }
  }

  returnToDistrictView = () => {
    if (!activeDistrict) return
    const key = activeDistrict
    const info = districts[key]
    if (activeCommunityId && host.classList.contains('community-location-active')) {
      const sample = getCommunitySamples(key, activeCommunities).find((community) => community.id === activeCommunityId)
      if (sample) {
        const sourcePosition = resolveCommunityPosition(sample)
        const districtPose = resolveDistrictMapPose(info.focus, info.offset, host.clientWidth)
        applyMapViewPose(target, resolveCommunityDrillPose(districtPose, sourcePosition, host.clientWidth, communityViewport.zoom))
        closeCommunityLocation(true, true)
        host.classList.add('community-focus-active')
        renderCommunityMarkers(key)
        if (interactionHint) interactionHint.innerHTML = `<i class="ph ph-magnifying-glass-plus"></i> 区域已放大 ${communityViewport.zoom.toFixed(2)}× · 点击其他点继续查看`
        if (exitButton) {
          exitButton.innerHTML = `<i class="ph ph-arrow-left" aria-hidden="true"></i> 返回${escapeHtml(info.name)}`
          exitButton.setAttribute('aria-label', `返回${info.name}小区价值地图`)
        }
        return
      }
    }
    activeCommunityId = null
    communityViewport = { ...defaultCommunityMapViewport }
    host.classList.remove('community-focus-active')
    applyMapViewPose(target, resolveDistrictMapPose(info.focus, info.offset, host.clientWidth))
    closeCommunityLocation(true)
    showDistrictSummary(key, false)
    renderCommunityMarkers(key)
    if (interactionHint) interactionHint.innerHTML = '<i class="ph ph-cursor-click"></i> 点击小区查看价值 · 拖拽旋转'
    if (exitButton) {
      exitButton.innerHTML = '<i class="ph ph-arrow-left" aria-hidden="true"></i> 北京全图'
      exitButton.setAttribute('aria-label', '返回北京全图')
    }
  }

  const selectCommunity = (sample: CommunityValueSample, openVicinity = false) => {
    activeCommunityId = sample.id
    const sourcePosition = resolveCommunityPosition(sample)
    if (!openVicinity) {
      closeCommunityLocation(false, true)
      communityViewport = focusCommunityMapViewport(communityViewport, sourcePosition)
      const info = districts[sample.district]
      const districtPose = resolveDistrictMapPose(info.focus, info.offset, host.clientWidth)
      applyMapViewPose(target, resolveCommunityDrillPose(districtPose, sourcePosition, host.clientWidth, communityViewport.zoom))
      host.classList.add('community-focus-active')
    }
    const scoreBreakdown = getCommunityScoreBreakdown(sample)
    const score = scoreBreakdown.purchaseValueScore
    const tier = getCommunityTier(sample)
    communityLayer?.querySelectorAll<HTMLButtonElement>('[data-community-id]').forEach((button) => {
      const selected = button.dataset.communityId === sample.id
      button.classList.toggle('active', selected)
      button.setAttribute('aria-pressed', String(selected))
    })
    if (status) {
      status.dataset.valueTier = tier
      const navigation = activeDistrict
        ? getCommunityNavigationState(getVisibleCommunityScores(activeDistrict).map(({ sample: item }) => item), sample.id)
        : null
      status.setAttribute('aria-label', `${sample.name}购买价值详情${navigation ? `，第${navigation.position}个，共${navigation.total}个` : ''}`)
    }
    if (statusTitle) statusTitle.innerHTML = tier === 'insufficient'
      ? `${escapeHtml(sample.name)}<em>数据不足 · 暂不评分</em>`
      : `${escapeHtml(sample.name)}<em>${score}分 · ${purchaseValueBands[tier].label}</em>`
    if (statusSummary) statusSummary.textContent = `${sample.zone} · 重点核验：${sample.watch}`
    const location = buildCommunityLocationContext(sample, activeCommunities)
    if (location) {
      const nearby = location.nearby.length
        ? location.nearby.map(({ community, distanceKm }, index) => `<li><i>${index + 1}</i><span><b>${escapeHtml(community.name)}</b><small>${escapeHtml(community.zone)} · ${distanceKm < 1 ? `${Math.round(distanceKm * 1_000)}m` : `${distanceKm.toFixed(1)}km`}</small></span></li>`).join('')
        : '<li class="empty">暂无可定位的周边小区参照</li>'
      const dimensionLabels = { location: '就业地段', amenities: '医院配套', transit: '交通通勤', environment: '环境物业', layout: '具体户型' } as const
      const dimensionScores = (Object.entries(dimensionLabels) as [keyof typeof dimensionLabels, string][]).map(([key, label]) => {
        const dimensionScore = scoreBreakdown.dimensions[key]
        return `<span class="${dimensionScore === undefined ? 'missing' : ''}"><small>${label}</small><b>${dimensionScore === undefined ? '待补证据' : `${Math.round(dimensionScore)}分`}</b></span>`
      }).join('')
      const employmentEvidence = scoreBreakdown.employmentAccess
        ? `最近核心工作区：${scoreBreakdown.employmentAccess.name}，直线约 ${scoreBreakdown.employmentAccess.distanceKm.toFixed(1)}km；实际通勤仍需高峰实测。`
        : '缺少坐标，暂不能计算核心工作区距离。'
      communityLocation.innerHTML = `<div class="community-score-model"><div><b>五维品质证据</b><small>当前覆盖 ${scoreBreakdown.evidenceCoverage}% · 缺失项不默认给分</small></div><div class="community-dimension-grid">${dimensionScores}</div><p>${employmentEvidence} 周边新房、医院等级、户型朝向和人车分流需补充结构化证据。</p></div><div class="community-location-metrics"><span><small>商圈 / 坐标</small><b>${escapeHtml(sample.zone)} · ${location.coordinateLabel}</b></span><span><small>500m / 1km 内小区</small><b>${location.within500m} / ${location.within1km}</b></span><button type="button" data-open-community-vicinity><i class="ph ph-map-trifold" aria-hidden="true"></i> 查看街区地图</button><a href="${location.externalUrl}" target="_blank" rel="noreferrer"><i class="ph ph-arrow-square-out" aria-hidden="true"></i> 在 OSM 打开</a></div><ol class="nearby-community-list">${nearby}</ol><p>位置基于公开坐标；地图展示道路与公开配套要素，教育资格、医疗等级及实际步行距离需另行核验。</p>`
      communityLocation.hidden = false
      if (openVicinity) loadCommunityVicinityMap(sample, location.embedUrl)
    } else {
      closeCommunityLocation()
      if (activeDistrict) {
        const info = districts[activeDistrict]
        applyMapViewPose(target, resolveDistrictMapPose(info.focus, info.offset, host.clientWidth))
      }
    }
    if (statusStats) {
      statusStats.hidden = false
      const transactionDate = sample.latestTransactionDate ? formatDataDate(sample.latestTransactionDate) : formatDataDate(activeDataset.updatedAt)
      const priceEvidence = sample.latestUnitPrice && sample.nearbyMedianUnitPrice
        ? `<span><small>最新成交（${transactionDate}）/ 周边中位</small><b>${unitPrice(sample.latestUnitPrice)} / ${unitPrice(sample.nearbyMedianUnitPrice)}</b></span>`
        : sample.latestUnitPrice
          ? `<span><small>最新成交（${transactionDate}）/ 周边中位</small><b>${unitPrice(sample.latestUnitPrice)} / 样本不足</b></span>`
          : `<span><small>参考价（截至 ${formatDataDate(activeDataset.updatedAt)}）/ 最新成交</small><b>${sample.referenceUnitPrice ? unitPrice(sample.referenceUnitPrice) : '暂无'} / 暂无</b></span>`
      const evidenceValue = tier === 'insufficient'
        ? `暂不计算 · ${sample.transactions180d} / ${sample.comparableSamples}`
        : `${sample.adjustedDiscount >= 0 ? '+' : ''}${sample.adjustedDiscount.toFixed(1)}% · ${sample.transactions180d} / ${sample.comparableSamples}`
      statusStats.innerHTML = `<span><small>社区品质 × 65%</small><b>${scoreBreakdown.qualityScore} / 100</b></span><span><small>价格机会 × 25%</small><b>${scoreBreakdown.priceOpportunityScore} / 100</b></span><span><small>流动性 × 10%</small><b>${scoreBreakdown.liquidityScore} / 100</b></span>${priceEvidence}<span><small>折价 · 180天成交 / 可比</small><b>${evidenceValue}</b></span><span><small>五维证据覆盖</small><b>${scoreBreakdown.evidenceCoverage}% · 缺失项待补</b></span>`
    }
    renderCommunityMarkers(sample.district)
    if (interactionHint) interactionHint.innerHTML = openVicinity
      ? '<i class="ph ph-map-pin"></i> 已进入街区地图 · 可切换相邻小区'
      : `<i class="ph ph-magnifying-glass-plus"></i> 区域已放大 ${communityViewport.zoom.toFixed(2)}× · 点击其他点继续查看`
    if (exitButton && activeDistrict) {
      exitButton.innerHTML = openVicinity
        ? '<i class="ph ph-arrow-left" aria-hidden="true"></i> 返回小区点位'
        : `<i class="ph ph-arrow-left" aria-hidden="true"></i> 返回${escapeHtml(districts[activeDistrict].name)}`
      exitButton.setAttribute('aria-label', openVicinity ? `返回${sample.name}点位地图` : `返回${districts[activeDistrict].name}小区价值地图`)
    }
  }

  const selectDistrict = (key: DistrictKey) => {
    enterMapWorkspace()
    const info = districts[key]
    activeDistrict = key
    activeCommunityId = null
    activeValueFilter = 'all'
    communityViewport = { ...defaultCommunityMapViewport }
    host.classList.remove('community-focus-active')
    host.classList.add('district-detail-active')
    host.dataset.activeDistrict = key
    host.querySelectorAll<HTMLButtonElement>('[data-map-district]').forEach((button) => {
      const selected = button.dataset.mapDistrict === key
      button.classList.toggle('active', selected)
      button.setAttribute('aria-pressed', String(selected))
    })
    applyMapViewPose(target, resolveDistrictMapPose(info.focus, info.offset, host.clientWidth))
    renderCommunityMarkers(key)
    showDistrictSummary(key)
    if (interactionHint) interactionHint.innerHTML = '<i class="ph ph-cursor-click"></i> 点击小区查看价值 · 拖拽旋转'
    if (exitButton) {
      exitButton.hidden = false
      exitButton.setAttribute('aria-hidden', 'false')
      exitButton.innerHTML = '<i class="ph ph-arrow-left" aria-hidden="true"></i> 北京全图'
      exitButton.setAttribute('aria-label', '返回北京全图')
    }
  }

  const onMapClick = (event: Event) => {
    if (drag.moved) return
    const targetElement = event.target as HTMLElement
    if (targetElement.closest('#exitMapWorkspace')) return
    const vicinityButton = targetElement.closest<HTMLButtonElement>('[data-open-community-vicinity]')
    if (vicinityButton && activeDistrict && activeCommunityId) {
      const sample = getCommunitySamples(activeDistrict, activeCommunities).find((item) => item.id === activeCommunityId)
      if (sample) selectCommunity(sample, true)
      return
    }
    const navigationButton = targetElement.closest<HTMLButtonElement>('[data-community-direction]')
    if (navigationButton) {
      navigateCommunity(navigationButton.dataset.communityDirection as CommunityNavigationDirection)
      return
    }
    const communityButton = targetElement.closest<HTMLButtonElement>('[data-community-id]')
    if (communityButton && activeDistrict) {
      const sample = getCommunitySamples(activeDistrict, activeCommunities).find((item) => item.id === communityButton.dataset.communityId)
      if (sample) selectCommunity(sample, activeCommunityId === sample.id && host.classList.contains('community-focus-active'))
      return
    }
    if (targetElement === communityDots && activeDistrict) {
      const pointerEvent = event as PointerEvent
      const rect = communityDots.getBoundingClientRect()
      const x = pointerEvent.clientX - rect.left
      const y = pointerEvent.clientY - rect.top
      const closest = findClosestCommunityDot(renderedDots, x, y)
      if (closest) {
        selectCommunity(closest.sample, activeCommunityId === closest.sample.id && host.classList.contains('community-focus-active'))
      }
      return
    }
    const filterButton = targetElement.closest<HTMLButtonElement>('[data-value-filter]')
    if (filterButton && activeDistrict) {
      activeValueFilter = filterButton.dataset.valueFilter as ValueFilter
      const selectedSample = activeCommunityId
        ? getCommunitySamples(activeDistrict, activeCommunities).find((sample) => sample.id === activeCommunityId)
        : undefined
      if (selectedSample && activeValueFilter !== 'all' && getCommunityTier(selectedSample) !== activeValueFilter) {
        returnToDistrictView()
      }
      renderCommunityMarkers(activeDistrict)
      return
    }
    const districtButton = targetElement.closest<HTMLButtonElement>('[data-map-district]')
    if (districtButton) {
      selectDistrict(districtButton.dataset.mapDistrict as DistrictKey)
      return
    }
    if (!host.classList.contains('map-workspace-active')) enterMapWorkspace()
  }

  const onMapIntent = (event: Event) => {
    const targetElement = event.target as HTMLElement
    if (targetElement.closest('[data-community-id]')) preconnectOpenStreetMap()
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
      communityRecordCache.clear()
      activeCommunityId = null
      activeValueFilter = 'all'
      communityViewport = { ...defaultCommunityMapViewport }
      host.classList.remove('community-focus-active')
      updateDatasetPresentation(dataset)
      if (dataImportStatus) dataImportStatus.textContent = '已在本地加载，不会上传'
      if (activeDistrict) {
        const info = districts[activeDistrict]
        applyMapViewPose(target, resolveDistrictMapPose(info.focus, info.offset, host.clientWidth))
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
      communityRecordCache.clear()
      activeCommunityId = null
      activeValueFilter = 'all'
      communityViewport = { ...defaultCommunityMapViewport }
      host.classList.remove('community-focus-active')
      host.dataset.communityDataReady = 'true'
      updateDatasetPresentation(dataset)
      if (dataMode) {
        dataMode.title = dataset.sourceUrl ? `${dataset.sourceName} · ${dataset.sourceUrl}` : dataset.sourceName
      }
      if (dataImportStatus) dataImportStatus.textContent = `${dataset.sourceName} · 已授权发布`
      if (activeDistrict) {
        const info = districts[activeDistrict]
        applyMapViewPose(target, resolveDistrictMapPose(info.focus, info.offset, host.clientWidth))
        renderCommunityMarkers(activeDistrict)
        showDistrictSummary(activeDistrict)
      }
    } catch (error) {
      host.dataset.communityDataReady = 'fallback'
      updateDatasetPresentation(activeDataset)
      if (dataImportStatus) dataImportStatus.textContent = '正式数据加载失败，当前显示示例'
      console.warn('小区购买价值数据加载失败，已回退到演示数据', error)
    }
  }

  const reset = () => {
    activeDistrict = null
    activeCommunityId = null
    activeValueFilter = 'all'
    communityViewport = { ...defaultCommunityMapViewport }
    host.classList.remove('district-detail-active', 'community-focus-active')
    delete host.dataset.activeDistrict
    applyMapViewPose(target, { x: -0.035, y: -0.055, z: -0.015, scale: 1, positionX: 0, positionY: 0 })
    host.querySelectorAll<HTMLButtonElement>('[data-map-district]').forEach((button) => {
      button.classList.remove('active')
      button.setAttribute('aria-pressed', 'false')
    })
    if (status) {
      status.removeAttribute('data-value-tier')
      status.setAttribute('aria-label', '北京核心区地图总览')
    }
    if (statusTitle) statusTitle.textContent = '北京 · 核心区'
    if (statusSummary) statusSummary.textContent = `成交数据截至 ${formatDataDate(activeDataset.updatedAt)} · 共可查看 ${activeDataset.communities.length.toLocaleString('zh-CN')} 个小区，点击区县进入详情。`
    if (statusStats) { statusStats.hidden = true; statusStats.innerHTML = '' }
    if (exitButton) {
      exitButton.hidden = true
      exitButton.setAttribute('aria-hidden', 'true')
      exitButton.innerHTML = '<i class="ph ph-arrow-left" aria-hidden="true"></i> 北京全图'
      exitButton.setAttribute('aria-label', '返回北京全图')
    }
    if (communityLayer) { communityLayer.hidden = true; communityLayer.innerHTML = '' }
    communityStepper.hidden = true
    closeCommunityLocation()
    if (communityDots) {
      communityDots.hidden = true
      communityDots.getContext('2d')?.clearRect(0, 0, communityDots.width, communityDots.height)
    }
    renderedDots = []
    if (valueLegend) valueLegend.hidden = true
    if (interactionHint) interactionHint.innerHTML = '<i class="ph ph-cursor-click"></i> 点击区县进入详情 · 拖拽旋转'
  }

  const onExitDistrictMap = () => activeCommunityId ? returnToDistrictView() : reset()

  host.addEventListener('pointerdown', onPointerDown)
  host.addEventListener('pointermove', onPointerMove, { passive: true })
  host.addEventListener('pointerup', finishDrag)
  host.addEventListener('pointercancel', finishDrag)
  host.addEventListener('pointerleave', onPointerLeave)
  host.addEventListener('keydown', onKeyDown)
  host.addEventListener('click', onMapClick)
  host.addEventListener('pointerover', onMapIntent, { passive: true })
  host.addEventListener('focusin', onMapIntent)
  resetButton?.addEventListener('click', reset)
  exitButton?.addEventListener('click', onExitDistrictMap)
  workspaceExitButton?.addEventListener('click', exitMapWorkspace)
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

  const onContextLost = (event: Event) => {
    event.preventDefault()
    stop()
    host.classList.remove('map-3d-ready')
    host.classList.add('map-3d-fallback')
    fallback?.setAttribute('aria-hidden', 'false')
  }
  const onContextRestored = () => {
    host.classList.remove('map-3d-fallback')
    host.classList.add('map-3d-ready')
    fallback?.setAttribute('aria-hidden', 'true')
    resize()
    start()
  }
  canvas.addEventListener('webglcontextlost', onContextLost)
  canvas.addEventListener('webglcontextrestored', onContextRestored)

  fallback?.setAttribute('aria-hidden', 'true')
  host.classList.add('map-3d-ready')
  start()

  return () => {
    disposed = true
    clearDrillTimers()
    stop()
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
    document.removeEventListener('visibilitychange', onVisibilityChange)
    canvas.removeEventListener('webglcontextlost', onContextLost)
    canvas.removeEventListener('webglcontextrestored', onContextRestored)
    host.removeEventListener('pointerdown', onPointerDown)
    host.removeEventListener('pointermove', onPointerMove)
    host.removeEventListener('pointerup', finishDrag)
    host.removeEventListener('pointercancel', finishDrag)
    host.removeEventListener('pointerleave', onPointerLeave)
    host.removeEventListener('keydown', onKeyDown)
    host.removeEventListener('click', onMapClick)
    host.removeEventListener('pointerover', onMapIntent)
    host.removeEventListener('focusin', onMapIntent)
    resetButton?.removeEventListener('click', reset)
    exitButton?.removeEventListener('click', onExitDistrictMap)
    workspaceExitButton?.removeEventListener('click', exitMapWorkspace)
    document.documentElement.classList.remove('map-workspace-open')
    document.body.classList.remove('map-workspace-open')
    if (mapWorkspaceAnchor?.parentNode) {
      mapWorkspaceAnchor.parentNode.insertBefore(host, mapWorkspaceAnchor)
      mapWorkspaceAnchor.remove()
      mapWorkspaceAnchor = null
    }
    dataFile?.removeEventListener('change', importCommunityData)
    map.geometry.dispose()
    ;(map.material as THREE.Material).dispose()
    texture.dispose()
    renderer.dispose()
  }
}
