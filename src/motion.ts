import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const numberSelector = [
  '.decision-card p b',
  '.metric-foot b',
  '.bar-line > b',
  '.risk-main > strong',
  '.risk-card p b',
  '.snapshot-grid strong',
].join(', ')

const previousValues = new Map<number, number>()
const numberTweens = new Map<number, gsap.core.Tween>()

type NumericText = {
  value: number
  prefix: string
  suffix: string
  decimals: number
  grouped: boolean
}

function readNumericText(element: HTMLElement): NumericText | null {
  const text = element.textContent?.trim() ?? ''
  const match = text.match(/-?[\d,]+(?:\.\d+)?/)
  if (!match || match.index === undefined) return null
  const value = Number(match[0].replace(/,/g, ''))
  if (!Number.isFinite(value)) return null
  const decimal = match[0].split('.')[1]
  return {
    value,
    prefix: text.slice(0, match.index),
    suffix: text.slice(match.index + match[0].length),
    decimals: decimal?.length ?? 0,
    grouped: match[0].includes(','),
  }
}

function formatNumericText(value: number, format: NumericText) {
  const formatted = value.toLocaleString('zh-CN', {
    useGrouping: format.grouped,
    minimumFractionDigits: format.decimals,
    maximumFractionDigits: format.decimals,
  })
  return `${format.prefix}${formatted}${format.suffix}`
}

function captureResultValues(root: ParentNode) {
  root.querySelectorAll<HTMLElement>(numberSelector).forEach((element, index) => {
    const numeric = readNumericText(element)
    if (numeric) previousValues.set(index, numeric.value)
  })
}

export function animateResults(root: HTMLElement) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const numericElements = root.querySelectorAll<HTMLElement>(numberSelector)

  numericElements.forEach((element, index) => {
    const numeric = readNumericText(element)
    if (!numeric) return
    const previous = previousValues.get(index) ?? numeric.value
    previousValues.set(index, numeric.value)
    numberTweens.get(index)?.kill()

    if (reducedMotion || previous === numeric.value) return
    const counter = { value: previous }
    element.textContent = formatNumericText(previous, numeric)
    const tween = gsap.to(counter, {
      value: numeric.value,
      duration: 0.62,
      ease: 'power2.out',
      overwrite: true,
      onUpdate: () => { element.textContent = formatNumericText(counter.value, numeric) },
      onComplete: () => {
        element.textContent = formatNumericText(numeric.value, numeric)
        numberTweens.delete(index)
      },
    })
    numberTweens.set(index, tween)
  })

  if (reducedMotion) return

  gsap.fromTo(
    root.querySelectorAll('.decision-card, .wealth-card, .risk-card, .snapshot-grid > div'),
    { opacity: 0, y: 14 },
    { opacity: 1, y: 0, duration: 0.46, stagger: 0.045, ease: 'power2.out', overwrite: true },
  )
  gsap.fromTo(
    root.querySelectorAll('.bar-track i, .risk-meter i'),
    { scaleX: 0, transformOrigin: '50% center' },
    { scaleX: 1, duration: 0.72, ease: 'power3.out', overwrite: true },
  )
}

export function initScrollMotion() {
  const media = gsap.matchMedia()
  captureResultValues(document)

  media.add('(prefers-reduced-motion: no-preference)', () => {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    heroTimeline
      .from('.hero-copy .overline', { opacity: 0, y: 14, duration: 0.5 })
      .from('.hero-copy h1', { opacity: 0, y: 42, duration: 0.86 }, '-=.26')
      .from('.hero-copy p, .hero-actions', { opacity: 0, y: 22, duration: 0.62, stagger: 0.09 }, '-=.48')
      .from('.capability-card', {
        opacity: 0,
        y: 18,
        duration: 0.58,
        stagger: 0.07,
      }, '-=.38')
      .from('.three-map .stage-head, .three-map .stage-legend, .three-map .map-coordinates', {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.06,
      }, '-=.42')

    gsap.to('.hero-copy', {
      yPercent: 12,
      opacity: 0.34,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.9 },
    })
    gsap.to('.ticker-inner', {
      xPercent: -8,
      ease: 'none',
      scrollTrigger: { trigger: '.ticker', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
    })

    gsap.set('.taxonomy-grid, .criteria-list', { opacity: 1, y: 0 })

    const chapterElements = gsap.utils.toArray<HTMLElement>([
      '.model-section .section-intro',
      '.model-layout',
      '.taxonomy-section .section-intro',
      '.selection-copy',
    ])
    chapterElements.forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        duration: 0.82,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 86%', once: true },
      })
    })

    gsap.from('.result-grid > article, .snapshot-grid > div', {
      opacity: 0,
      y: 26,
      scale: 0.985,
      stagger: 0.07,
      duration: 0.66,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.model-layout', start: 'top 76%', once: true },
    })
    gsap.from('.taxonomy-card', {
      opacity: 0,
      y: 38,
      rotateX: 6,
      transformOrigin: '50% 100%',
      stagger: 0.1,
      duration: 0.74,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.taxonomy-grid', start: 'top 82%', once: true },
    })
    gsap.from('.criterion', {
      opacity: 0,
      x: 28,
      stagger: 0.065,
      duration: 0.58,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.criteria-list', start: 'top 82%', once: true },
    })

    return () => heroTimeline.kill()
  })

  media.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set([
      '[data-reveal]',
      '.taxonomy-card',
      '.criterion',
      '.hero-copy > *',
      '.capability-card',
      '.three-map .stage-head',
      '.three-map .stage-legend',
      '.three-map .map-coordinates',
    ], { clearProps: 'transform', opacity: 1 })
  })

  requestAnimationFrame(() => ScrollTrigger.refresh())
  return () => {
    numberTweens.forEach((tween) => tween.kill())
    numberTweens.clear()
    media.revert()
  }
}
