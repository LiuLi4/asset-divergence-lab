import type { WealthTimelinePoint } from './finance'

interface WealthChartOptions {
  buyLabel: string
  investLabel: string
}

const compactWan = (value: number) => {
  const absolute = Math.abs(value)
  if (absolute < 0.05) return '0万'
  if (absolute >= 1000) return `${Math.round(value).toLocaleString('zh-CN')}万`
  if (absolute >= 100) return `${Math.round(value)}万`
  return `${value.toFixed(1)}万`
}

const detailedWan = (value: number) => `${value.toLocaleString('zh-CN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} 万`

export function initWealthChart(root: HTMLElement, points: WealthTimelinePoint[], options: WealthChartOptions) {
  const canvas = root.querySelector<HTMLCanvasElement>('[data-wealth-chart]')
  const tooltip = root.querySelector<HTMLOutputElement>('[data-chart-tooltip]')
  if (!canvas || !tooltip || points.length === 0) return () => undefined

  const context = canvas.getContext('2d')
  if (!context) return () => undefined

  let activeIndex: number | null = null
  let chartBox = { left: 50, top: 20, right: 20, bottom: 38, width: 1, height: 1 }
  let values = { min: 0, max: 1 }

  const draw = () => {
    const bounds = canvas.getBoundingClientRect()
    if (bounds.width === 0 || bounds.height === 0) return
    const density = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(bounds.width * density)
    canvas.height = Math.round(bounds.height * density)
    context.setTransform(density, 0, 0, density, 0, 0)
    context.clearRect(0, 0, bounds.width, bounds.height)

    const left = bounds.width < 520 ? 42 : 58
    const right = bounds.width < 520 ? 12 : 22
    const top = 20
    const bottom = 38
    chartBox = { left, top, right, bottom, width: Math.max(1, bounds.width - left - right), height: Math.max(1, bounds.height - top - bottom) }

    const allValues = points.flatMap((point) => [point.buyWealth, point.investWealth])
    const rawMin = Math.min(0, ...allValues)
    const rawMax = Math.max(0, ...allValues)
    const roughStep = Math.max(1, rawMax - rawMin) / 4
    const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)))
    const normalizedStep = roughStep / magnitude
    const niceStep = (normalizedStep <= 1 ? 1 : normalizedStep <= 2 ? 2 : normalizedStep <= 5 ? 5 : 10) * magnitude
    values = {
      min: rawMin < 0 ? Math.floor(rawMin / niceStep) * niceStep : 0,
      max: Math.max(niceStep, Math.ceil(rawMax / niceStep) * niceStep),
    }

    const xFor = (index: number) => chartBox.left + (points.length === 1 ? 0 : index / (points.length - 1) * chartBox.width)
    const yFor = (value: number) => chartBox.top + (values.max - value) / (values.max - values.min) * chartBox.height

    context.font = "11px 'DM Mono', monospace"
    context.textBaseline = 'middle'
    context.lineWidth = 1
    for (let tick = 0; tick <= 4; tick += 1) {
      const ratio = tick / 4
      const y = chartBox.top + chartBox.height * ratio
      const value = values.max - (values.max - values.min) * ratio
      context.strokeStyle = 'rgba(241, 238, 251, 0.13)'
      context.beginPath()
      context.moveTo(chartBox.left, y)
      context.lineTo(chartBox.left + chartBox.width, y)
      context.stroke()
      context.fillStyle = 'rgba(241, 238, 251, 0.58)'
      context.textAlign = 'right'
      context.fillText(compactWan(value), chartBox.left - 10, y)
    }

    const labelStep = Math.max(1, Math.ceil((points.length - 1) / (bounds.width < 520 ? 4 : 6)))
    points.forEach((point, index) => {
      if (index % labelStep !== 0 && index !== points.length - 1) return
      context.fillStyle = 'rgba(241, 238, 251, 0.58)'
      context.textAlign = index === 0 ? 'left' : index === points.length - 1 ? 'right' : 'center'
      context.fillText(point.year === 0 ? '现在' : `${point.year}年`, xFor(index), chartBox.top + chartBox.height + 23)
    })

    const drawSeries = (key: 'buyWealth' | 'investWealth', color: string) => {
      context.strokeStyle = color
      context.lineWidth = 2.5
      context.lineJoin = 'round'
      context.lineCap = 'round'
      context.beginPath()
      points.forEach((point, index) => {
        const x = xFor(index)
        const y = yFor(point[key])
        if (index === 0) context.moveTo(x, y)
        else context.lineTo(x, y)
      })
      context.stroke()
      context.fillStyle = color
      points.forEach((point, index) => {
        context.beginPath()
        context.arc(xFor(index), yFor(point[key]), 2.25, 0, Math.PI * 2)
        context.fill()
      })
    }

    drawSeries('buyWealth', '#bca8f3')
    drawSeries('investWealth', '#58c29a')

    if (activeIndex !== null) {
      const point = points[activeIndex]
      const x = xFor(activeIndex)
      context.strokeStyle = 'rgba(241, 238, 251, 0.34)'
      context.lineWidth = 1
      context.beginPath()
      context.moveTo(x, chartBox.top)
      context.lineTo(x, chartBox.top + chartBox.height)
      context.stroke()
      ;(['buyWealth', 'investWealth'] as const).forEach((key, seriesIndex) => {
        context.beginPath()
        context.arc(x, yFor(point[key]), 4, 0, Math.PI * 2)
        context.fillStyle = seriesIndex === 0 ? '#bca8f3' : '#58c29a'
        context.fill()
        context.strokeStyle = '#251044'
        context.lineWidth = 2
        context.stroke()
      })
    }
  }

  const showPoint = (index: number) => {
    activeIndex = Math.max(0, Math.min(points.length - 1, index))
    const point = points[activeIndex]
    const x = chartBox.left + (points.length === 1 ? 0 : activeIndex / (points.length - 1) * chartBox.width)
    const difference = point.buyWealth - point.investWealth
    tooltip.hidden = false
    tooltip.style.left = `${Math.max(10, Math.min(canvas.clientWidth - 190, x - 84))}px`
    tooltip.innerHTML = `<b>${point.year === 0 ? '现在' : `第 ${point.year} 年`}</b><span><i class="buy-dot"></i>${options.buyLabel}<strong>${detailedWan(point.buyWealth)}</strong></span><span><i class="cash-dot"></i>${options.investLabel}<strong>${detailedWan(point.investWealth)}</strong></span><em>${difference >= 0 ? '买房路径领先' : '持有现金领先'} ${detailedWan(Math.abs(difference))}</em>`
    canvas.setAttribute('aria-label', `${point.year === 0 ? '现在' : `第${point.year}年`}，${options.buyLabel}${detailedWan(point.buyWealth)}，${options.investLabel}${detailedWan(point.investWealth)}`)
    draw()
  }

  const onPointerMove = (event: PointerEvent) => {
    const bounds = canvas.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (event.clientX - bounds.left - chartBox.left) / chartBox.width))
    showPoint(Math.round(ratio * (points.length - 1)))
  }
  const onPointerLeave = () => { activeIndex = null; tooltip.hidden = true; draw() }
  const onFocus = () => showPoint(points.length - 1)
  const onBlur = () => { activeIndex = null; tooltip.hidden = true; draw() }
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Home' && event.key !== 'End') return
    event.preventDefault()
    if (event.key === 'Home') showPoint(0)
    else if (event.key === 'End') showPoint(points.length - 1)
    else showPoint((activeIndex ?? points.length - 1) + (event.key === 'ArrowRight' ? 1 : -1))
  }

  canvas.addEventListener('pointermove', onPointerMove)
  canvas.addEventListener('pointerleave', onPointerLeave)
  canvas.addEventListener('focus', onFocus)
  canvas.addEventListener('blur', onBlur)
  canvas.addEventListener('keydown', onKeyDown)
  const resizeObserver = new ResizeObserver(draw)
  resizeObserver.observe(canvas)
  draw()

  return () => {
    resizeObserver.disconnect()
    canvas.removeEventListener('pointermove', onPointerMove)
    canvas.removeEventListener('pointerleave', onPointerLeave)
    canvas.removeEventListener('focus', onFocus)
    canvas.removeEventListener('blur', onBlur)
    canvas.removeEventListener('keydown', onKeyDown)
  }
}
