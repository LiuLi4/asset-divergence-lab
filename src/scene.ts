import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Position = [number, number]
type PolygonCoordinates = Position[][]
type Geometry = {
  type: 'Polygon' | 'MultiPolygon'
  coordinates: PolygonCoordinates | PolygonCoordinates[]
}
type Feature = { properties?: { name?: string }; geometry: Geometry }
type FeatureCollection = { features: Feature[] }

const COLORS = {
  paper: 0xeeeae2,
  map: 0xd7d4cb,
  mapAlt: 0xe5e1d8,
  line: 0x768b89,
  structure: 0xf4f1ea,
  scarce: 0x4d9f92,
  cashflow: 0xc9a04a,
  decline: 0xc56e68,
}

const fullBleedStyles = `
  .hero.asset-scene-hero {
    min-height: calc(100svh - 82px);
    grid-template-columns: minmax(0, 1fr);
    overflow: clip;
  }
  .hero.asset-scene-hero .hero-copy { max-width: 1050px; }
  .hero.asset-scene-hero::after {
    background:
      linear-gradient(90deg, rgba(244,241,252,.97) 0%, rgba(244,241,252,.82) 28%, rgba(239,234,249,.18) 48%, transparent 68%),
      linear-gradient(0deg, rgba(241,238,251,.46), transparent 26%);
  }
  .three-map.asset-scene-fullbleed {
    position: absolute;
    inset: 0 auto 0 50%;
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
    border: 0;
    border-radius: 0;
    transform: translateX(-50%);
    justify-self: stretch;
    background: #eeeae2;
    box-shadow: none;
    overflow: hidden;
    z-index: 0;
  }
  .three-map.asset-scene-fullbleed::before {
    background:
      linear-gradient(90deg, rgba(241,238,232,.99) 0%, rgba(241,238,232,.94) 25%, rgba(241,238,232,.48) 43%, rgba(241,238,232,.04) 67%),
      linear-gradient(180deg, rgba(255,255,255,.18), transparent 48%, rgba(96,89,78,.1));
  }
  .asset-scene-fullbleed .map-vignette {
    background: radial-gradient(circle at 72% 47%, transparent 32%, rgba(91,87,78,.025) 65%, rgba(71,68,62,.1) 100%);
  }
  .three-map.asset-scene-fullbleed.webgl-ready canvas {
    opacity: .94;
    filter: saturate(.9) contrast(1.04);
    mix-blend-mode: normal;
  }
  .asset-scene-fullbleed .stage-head { left: auto; right: 34px; text-align: right; }
  .asset-scene-fullbleed .stage-head span,
  .asset-scene-fullbleed .stage-hint,
  .asset-scene-fullbleed .map-coordinates { color: #687b79; }
  .asset-scene-fullbleed .stage-head b { color: #203439; }
  .asset-scene-fullbleed .stage-legend { left: auto; right: 34px; color: #5e716f; }
  .asset-scene-fullbleed .stage-hint { top: 48px; right: 34px; }
  @media (max-width: 900px) {
    .hero.asset-scene-hero {
      min-height: max(680px, calc(100svh - 72px));
      padding-top: 76px;
      padding-bottom: 80px;
    }
    .hero.asset-scene-hero .hero-copy { max-width: min(92vw, 850px); }
    .three-map.asset-scene-fullbleed {
      position: absolute;
      inset: 0 auto 0 50%;
      width: 100vw;
      height: 100%;
      transform: translateX(-50%);
    }
    .three-map.asset-scene-fullbleed::before {
      background:
        linear-gradient(90deg, rgba(241,238,232,.97) 0%, rgba(241,238,232,.84) 56%, rgba(241,238,232,.12) 100%),
        linear-gradient(180deg, rgba(255,255,255,.1), transparent 50%, rgba(82,78,70,.13));
    }
    .asset-scene-fullbleed .stage-head,
    .asset-scene-fullbleed .stage-hint { display: none; }
    .asset-scene-fullbleed .stage-legend { right: 20px; bottom: 18px; left: auto; }
  }
  @media (max-width: 560px) {
    .hero.asset-scene-hero { min-height: max(650px, calc(100svh - 72px)); }
    .asset-scene-fullbleed .stage-legend { display: none; }
  }
`

function collectPositions(data: FeatureCollection) {
  const positions: Position[] = []
  data.features.forEach(({ geometry }) => {
    const polygons = geometry.type === 'Polygon'
      ? [geometry.coordinates as PolygonCoordinates]
      : geometry.coordinates as PolygonCoordinates[]
    polygons.forEach((polygon) => polygon.forEach((ring) => positions.push(...ring)))
  })
  return positions
}

function addRingRoad(group: THREE.Group, radiusX: number, radiusZ: number, opacity: number) {
  const points = Array.from({ length: 112 }, (_, index) => {
    const angle = index / 112 * Math.PI * 2
    return new THREE.Vector3(Math.cos(angle) * radiusX, 0.19, Math.sin(angle) * radiusZ)
  })
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const material = new THREE.LineBasicMaterial({ color: COLORS.line, transparent: true, opacity })
  group.add(new THREE.LineLoop(geometry, material))
}

function createSignalTower(value: number, position: [number, number], color: number) {
  const height = Math.max(0.58, Math.abs(value) * 0.72)
  const geometry = new THREE.CylinderGeometry(0.34, 0.46, height, 8, 1, false)
  const material = new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.24,
    metalness: 0.2,
    clearcoat: 0.7,
    clearcoatRoughness: 0.22,
    emissive: color,
    emissiveIntensity: 0.035,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(position[0], height / 2 + 0.2, position[1])
  mesh.castShadow = true
  const crown = new THREE.Mesh(
    new THREE.CylinderGeometry(0.39, 0.39, 0.045, 8),
    new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.18, metalness: 0.3 }),
  )
  crown.position.y = height / 2 + 0.035
  mesh.add(crown)
  return mesh
}

function createCity(highQuality: boolean) {
  const group = new THREE.Group()
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshPhysicalMaterial({
    color: COLORS.structure,
    roughness: 0.3,
    metalness: 0.12,
    clearcoat: 0.42,
    clearcoatRoughness: 0.3,
  })
  const count = highQuality ? 104 : 64
  const buildings = new THREE.InstancedMesh(geometry, material, count)
  const matrix = new THREE.Matrix4()
  const quaternion = new THREE.Quaternion()
  const position = new THREE.Vector3()
  const scale = new THREE.Vector3()

  for (let index = 0; index < count; index += 1) {
    const angle = index * 2.399963 + Math.sin(index * 1.7) * 0.18
    const radius = 0.48 + Math.sqrt(index / count) * 3.35
    const width = 0.11 + ((index * 17) % 8) * 0.018
    const depth = 0.12 + ((index * 11) % 7) * 0.02
    const centerBias = 1 - Math.min(radius / 4.2, 0.88)
    const height = 0.24 + ((index * 29) % 13) * 0.055 + centerBias * 0.95
    position.set(Math.cos(angle) * radius, height / 2 + 0.19, Math.sin(angle) * radius * 0.74)
    quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -angle + (index % 3) * 0.14)
    scale.set(width, height, depth)
    matrix.compose(position, quaternion, scale)
    buildings.setMatrixAt(index, matrix)
    const warmth = 0.9 + (index % 5) * 0.018
    buildings.setColorAt(index, new THREE.Color(warmth, warmth * 0.985, warmth * 0.94))
  }
  buildings.instanceMatrix.needsUpdate = true
  buildings.instanceColor!.needsUpdate = true
  buildings.castShadow = highQuality
  buildings.receiveShadow = true
  group.add(buildings)
  return group
}

export async function initAssetScene(host: HTMLElement) {
  const canvas = host.querySelector<HTMLCanvasElement>('#assetScene')
  if (!canvas || !window.WebGLRenderingContext) {
    host.classList.add('webgl-fallback')
    return () => undefined
  }

  const hero = host.closest<HTMLElement>('.hero')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const compact = window.matchMedia('(max-width: 760px)').matches
  const highQuality = !compact && window.devicePixelRatio <= 2.5
  const layoutStyle = document.createElement('style')
  layoutStyle.dataset.assetSceneLayout = ''
  layoutStyle.textContent = fullBleedStyles
  document.head.append(layoutStyle)
  hero?.classList.add('asset-scene-hero')
  host.classList.add('asset-scene-fullbleed')

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: false,
    antialias: highQuality,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.35 : 1.8))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.setClearColor(COLORS.paper, 1)
  renderer.shadowMap.enabled = highQuality
  renderer.shadowMap.type = THREE.PCFShadowMap

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(COLORS.paper)
  scene.fog = new THREE.Fog(0xeeeae2, 10.5, 22)
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60)
  camera.position.set(0, 8.6, 11.7)

  const world = new THREE.Group()
  world.rotation.set(-0.055, -0.16, -0.025)
  scene.add(world)

  scene.add(new THREE.HemisphereLight(0xffffff, 0x9c978e, 2.2))
  const keyLight = new THREE.DirectionalLight(0xfff7e9, 4.1)
  keyLight.position.set(-4, 11, 7)
  keyLight.castShadow = highQuality
  keyLight.shadow.mapSize.set(1024, 1024)
  keyLight.shadow.camera.left = -7
  keyLight.shadow.camera.right = 7
  keyLight.shadow.camera.top = 7
  keyLight.shadow.camera.bottom = -7
  keyLight.shadow.bias = -0.0004
  scene.add(keyLight)
  const rimLight = new THREE.DirectionalLight(0x8fd3ca, 2.0)
  rimLight.position.set(7, 5, -5)
  scene.add(rimLight)
  const warmFill = new THREE.PointLight(0xffd9a1, 7, 16, 2)
  warmFill.position.set(2, 4, 4)
  scene.add(warmFill)

  const base = new THREE.Mesh(
    new THREE.CircleGeometry(6.2, compact ? 48 : 80),
    new THREE.MeshStandardMaterial({ color: 0xc9c5bc, roughness: 0.82, metalness: 0.03, transparent: true, opacity: 0.55 }),
  )
  base.rotation.x = -Math.PI / 2
  base.position.y = -0.025
  base.receiveShadow = true
  world.add(base)

  const mapGroup = new THREE.Group()
  world.add(mapGroup)
  const districtMeshes: THREE.Mesh[] = []

  try {
    const response = await fetch(`${import.meta.env.BASE_URL}beijing.geojson`)
    if (!response.ok) throw new Error('Map data unavailable')
    const data = await response.json() as FeatureCollection
    const points = collectPositions(data)
    const minX = Math.min(...points.map(([x]) => x))
    const maxX = Math.max(...points.map(([x]) => x))
    const minY = Math.min(...points.map(([, y]) => y))
    const maxY = Math.max(...points.map(([, y]) => y))
    const centerX = (minX + maxX) / 2
    const centerY = (minY + maxY) / 2
    const scale = 11 / Math.max(maxX - minX, maxY - minY)
    const project = ([longitude, latitude]: Position) => new THREE.Vector2(
      (longitude - centerX) * scale,
      (latitude - centerY) * scale,
    )

    data.features.forEach((feature, featureIndex) => {
      const polygons = feature.geometry.type === 'Polygon'
        ? [feature.geometry.coordinates as PolygonCoordinates]
        : feature.geometry.coordinates as PolygonCoordinates[]
      polygons.forEach((polygon) => {
        if (!polygon[0]?.length) return
        const shape = new THREE.Shape(polygon[0].map(project))
        polygon.slice(1).forEach((hole) => shape.holes.push(new THREE.Path(hole.map(project))))
        const depth = 0.095 + (featureIndex % 4) * 0.024
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth,
          bevelEnabled: true,
          bevelSegments: 1,
          bevelSize: 0.018,
          bevelThickness: 0.018,
          curveSegments: 1,
        })
        geometry.rotateX(-Math.PI / 2)
        const material = new THREE.MeshPhysicalMaterial({
          color: featureIndex % 2 ? COLORS.mapAlt : COLORS.map,
          roughness: 0.38,
          metalness: 0.08,
          clearcoat: 0.26,
          clearcoatRoughness: 0.5,
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.y = 0.035
        mesh.userData.district = feature.properties?.name ?? ''
        mesh.receiveShadow = true
        districtMeshes.push(mesh)
        mapGroup.add(mesh)
        const outline = new THREE.LineSegments(
          new THREE.EdgesGeometry(geometry, 28),
          new THREE.LineBasicMaterial({ color: COLORS.line, transparent: true, opacity: 0.24 }),
        )
        outline.position.copy(mesh.position)
        mapGroup.add(outline)
      })
    })
  } catch {
    host.classList.add('map-data-fallback')
    const fallback = new THREE.Mesh(
      new THREE.PlaneGeometry(10.8, 8.2, 18, 18),
      new THREE.MeshPhysicalMaterial({ color: COLORS.map, wireframe: true, transparent: true, opacity: 0.48 }),
    )
    fallback.rotation.x = -Math.PI / 2
    fallback.position.y = 0.05
    mapGroup.add(fallback)
  }

  addRingRoad(world, 1.45, 1.1, 0.52)
  addRingRoad(world, 2.35, 1.75, 0.38)
  addRingRoad(world, 3.35, 2.48, 0.27)

  const centralAxisGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0.205, -4.3),
    new THREE.Vector3(0, 0.205, 4.3),
  ])
  world.add(new THREE.Line(centralAxisGeometry, new THREE.LineBasicMaterial({ color: 0x556b69, transparent: true, opacity: 0.48 })))

  const city = createCity(highQuality)
  world.add(city)
  const towers = [
    createSignalTower(3.8, [1.9, -0.9], COLORS.scarce),
    createSignalTower(1.15, [-2.2, -0.25], COLORS.cashflow),
    createSignalTower(2.15, [2.5, 1.8], COLORS.decline),
  ]
  towers.forEach((tower) => world.add(tower))

  const nodePositions: number[] = []
  for (let index = 0; index < (compact ? 54 : 82); index += 1) {
    const angle = index * 2.399
    const radius = 0.45 + (index % 17) * 0.22
    nodePositions.push(Math.cos(angle) * radius, 0.225 + (index % 4) * 0.018, Math.sin(angle) * radius * 0.78)
  }
  const nodesMaterial = new THREE.PointsMaterial({ color: COLORS.scarce, size: compact ? 0.045 : 0.035, transparent: true, opacity: 0.62 })
  const nodes = new THREE.Points(
    new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3)),
    nodesMaterial,
  )
  world.add(nodes)

  const scrollState = { cameraY: 8.6, cameraZ: 11.7, rotationX: -0.055, rotationY: -0.16, worldY: 0 }
  const pointer = { x: 0, y: 0 }
  let viewportAspect = 1
  let elapsed = 0
  let previousFrame = 0
  let isIntersecting = true
  let isDisposed = false

  const renderFrame = (time = performance.now()) => {
    if (isDisposed) return
    const delta = previousFrame ? Math.min((time - previousFrame) / 1000, 0.05) : 1 / 60
    previousFrame = time
    elapsed += reducedMotion ? 0 : delta
    const damping = reducedMotion ? 1 : 1 - Math.exp(-delta * 5.2)
    const horizontalOffset = viewportAspect > 1.15 ? 2.2 : 0.75
    const targetX = horizontalOffset + pointer.x * 0.34

    world.position.x += (targetX - world.position.x) * damping
    world.position.y += (scrollState.worldY - world.position.y) * damping
    world.rotation.x += (scrollState.rotationX + pointer.y * 0.055 - world.rotation.x) * damping
    world.rotation.y += (scrollState.rotationY + pointer.x * 0.13 - world.rotation.y) * damping
    camera.position.x += (pointer.x * 0.22 - camera.position.x) * damping
    camera.position.y += (scrollState.cameraY + pointer.y * 0.18 - camera.position.y) * damping
    camera.position.z += (scrollState.cameraZ - camera.position.z) * damping
    camera.lookAt(horizontalOffset * 0.2, -0.15, 0)

    if (!reducedMotion) {
      nodes.rotation.y = elapsed * 0.018
      warmFill.intensity = 6.7 + Math.sin(elapsed * 0.72) * 0.3
    }
    renderer.render(scene, camera)
  }

  const startLoop = () => {
    if (reducedMotion || isDisposed || !isIntersecting || document.hidden) {
      renderFrame()
      return
    }
    previousFrame = 0
    renderer.setAnimationLoop(renderFrame)
  }
  const stopLoop = () => renderer.setAnimationLoop(null)

  const resize = () => {
    const width = Math.max(host.clientWidth, 1)
    const height = Math.max(host.clientHeight, 1)
    viewportAspect = width / height
    renderer.setSize(width, height, false)
    camera.aspect = viewportAspect
    camera.fov = compact ? 40 : 34
    camera.updateProjectionMatrix()
    renderFrame()
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(host)
  resize()

  const pointerTarget = hero ?? host
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  const onPointerMove = (event: PointerEvent) => {
    if (reducedMotion || !finePointer.matches) return
    const rect = pointerTarget.getBoundingClientRect()
    pointer.x = THREE.MathUtils.clamp((event.clientX - rect.left) / rect.width * 2 - 1, -1, 1)
    pointer.y = THREE.MathUtils.clamp((event.clientY - rect.top) / rect.height * 2 - 1, -1, 1)
  }
  const onPointerLeave = () => {
    pointer.x = 0
    pointer.y = 0
  }
  pointerTarget.addEventListener('pointermove', onPointerMove, { passive: true })
  pointerTarget.addEventListener('pointerleave', onPointerLeave)

  const intro = gsap.timeline({ defaults: { ease: 'power3.out' }, paused: reducedMotion })
  if (!reducedMotion) {
    intro
      .fromTo(world.scale, { x: 0.96, y: 0.96, z: 0.96 }, { x: 1, y: 1, z: 1, duration: 1.25 })
      .fromTo(mapGroup.position, { y: -0.22 }, { y: 0, duration: 1.1 }, 0)
      .fromTo(city.scale, { y: 0.01 }, { y: 1, duration: 1.15 }, 0.16)
      .fromTo(towers.map((tower) => tower.scale), { y: 0.01 }, { y: 1, duration: 1.05, stagger: 0.12 }, 0.28)
      .fromTo(nodesMaterial, { opacity: 0 }, { opacity: 0.62, duration: 0.9 }, 0.42)
    intro.play()
  }

  const scrollTimeline = gsap.timeline({
    paused: reducedMotion || !hero,
    scrollTrigger: reducedMotion || !hero ? undefined : {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.15,
      invalidateOnRefresh: true,
    },
  })
  scrollTimeline.to(scrollState, {
    cameraY: 7.25,
    cameraZ: 9.65,
    rotationX: -0.12,
    rotationY: 0.08,
    worldY: -0.42,
    ease: 'none',
  })

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    isIntersecting = entry.isIntersecting
    if (isIntersecting) startLoop()
    else stopLoop()
  }, { rootMargin: '120px 0px' })
  intersectionObserver.observe(host)

  const onVisibilityChange = () => {
    if (document.hidden) stopLoop()
    else startLoop()
  }
  document.addEventListener('visibilitychange', onVisibilityChange)
  startLoop()
  host.classList.add('webgl-ready')

  return () => {
    isDisposed = true
    stopLoop()
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
    document.removeEventListener('visibilitychange', onVisibilityChange)
    pointerTarget.removeEventListener('pointermove', onPointerMove)
    pointerTarget.removeEventListener('pointerleave', onPointerLeave)
    intro.kill()
    scrollTimeline.scrollTrigger?.kill()
    scrollTimeline.kill()
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
        object.geometry?.dispose()
        const materials = Array.isArray(object.material) ? object.material : [object.material]
        materials.forEach((material) => material?.dispose())
      }
    })
    renderer.dispose()
    renderer.forceContextLoss()
    host.classList.remove('webgl-ready', 'asset-scene-fullbleed', 'map-data-fallback')
    hero?.classList.remove('asset-scene-hero')
    layoutStyle.remove()
  }
}
