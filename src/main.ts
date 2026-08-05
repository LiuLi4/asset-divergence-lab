import './style.css'
import '@phosphor-icons/web/regular'
import '@phosphor-icons/web/bold'
import { animateResults, initScrollMotion } from './motion'
import { calculateFinance, calculateWealthTimeline, scenarioMatrix, type FinanceInputs, type FinanceResult, type ViewMode } from './finance'
import { initWealthChart } from './wealth-chart'

type Scenario = 'scarce' | 'cashflow' | 'decline'
type InputKey = keyof FinanceInputs
type ScoreKey = 'location' | 'transit' | 'amenities' | 'layout' | 'community' | 'liquidity'

interface Candidate {
  name: string
  scores: Record<ScoreKey, number>
}

const scenarios: Record<Scenario, { label: string; eyebrow: string; description: string; appreciation: number; rentRatio: number; tone: string }> = {
  scarce: { label: '稀缺资产候选', eyebrow: '优先保值', description: '核心就业 · 稀缺供给 · 高流动性', appreciation: 3.8, rentRatio: 1.6, tone: 'teal' },
  cashflow: { label: '居住与现金流型', eyebrow: '租金托底', description: '成熟配套 · 价格可控 · 有取舍', appreciation: 0.8, rentRatio: 3.1, tone: 'amber' },
  decline: { label: '高折旧风险型', eyebrow: '谨慎进入', description: '需求偏弱 · 同质供给 · 远通勤', appreciation: -3, rentRatio: 1.4, tone: 'rose' },
}

const criteria: { key: ScoreKey; label: string; weight: number; icon: string; help: string }[] = [
  { key: 'location', label: '就业与地段', weight: 25, icon: 'ph-buildings', help: '核心就业区可达性、稳定人口与新增供给稀缺度' },
  { key: 'transit', label: '交通通勤', weight: 15, icon: 'ph-train-regional', help: '轨道交通、门到门通勤时间与替代线路' },
  { key: 'amenities', label: '医院与配套', weight: 15, icon: 'ph-hospital', help: '三甲医院、商业、公园与公共服务成熟度' },
  { key: 'layout', label: '户型采光', weight: 15, icon: 'ph-blueprint', help: '朝向、通风、动线、得房率与改造难度' },
  { key: 'community', label: '小区与物业', weight: 15, icon: 'ph-tree', help: '物业维护、停车、人车分流、楼龄与公共空间' },
  { key: 'liquidity', label: '流动性', weight: 15, icon: 'ph-arrows-left-right', help: '同户型挂牌量、成交速度、总价门槛与接盘人群' },
]

const defaults: FinanceInputs = {
  homePrice: 500,
  downPayment: 200,
  providentLoan: 120,
  providentRate: 2.6,
  commercialRate: 3.05,
  loanYears: 30,
  monthlyRent: 0.85,
  rentGrowth: 2,
  appreciation: 2,
  wealthYield: 3,
  income: 4,
  years: 10,
  purchaseCostRate: 2,
  saleCostRate: 1,
  annualHoldingRate: 0.6,
  renovationCost: 20,
  incomeDrop: 30,
}

const defaultCandidates: Candidate[] = [
  { name: '候选 A · 核心区老房', scores: { location: 5, transit: 5, amenities: 5, layout: 3, community: 2, liquidity: 5 } },
  { name: '候选 B · 近郊次新', scores: { location: 3, transit: 4, amenities: 3, layout: 5, community: 4, liquidity: 3 } },
  { name: '候选 C · 远郊大户型', scores: { location: 2, transit: 2, amenities: 2, layout: 5, community: 4, liquidity: 2 } },
]

let inputs: FinanceInputs = { ...defaults }
let activeScenario: Scenario | null = null
let viewMode: ViewMode = 'self'
let candidates: Candidate[] = structuredClone(defaultCandidates)
let activeCandidate = 0
let calculationFrame: number | null = null
let exportFeedbackTimer: number | null = null
let toastTimer: number | null = null
let disposeWealthChart: () => void = () => undefined

const sliderBounds: Record<InputKey, { min: number; max: number; step: number }> = {
  homePrice: { min: 50, max: 3000, step: 10 }, downPayment: { min: 0, max: 1500, step: 5 }, providentLoan: { min: 0, max: 300, step: 5 },
  providentRate: { min: 0, max: 10, step: 0.05 }, commercialRate: { min: 0, max: 10, step: 0.05 }, loanYears: { min: 5, max: 30, step: 1 },
  monthlyRent: { min: 0.1, max: 8, step: 0.05 }, rentGrowth: { min: -5, max: 10, step: 0.1 }, appreciation: { min: -10, max: 10, step: 0.1 },
  wealthYield: { min: -5, max: 15, step: 0.1 }, income: { min: 0.3, max: 30, step: 0.1 }, years: { min: 1, max: 30, step: 1 },
  purchaseCostRate: { min: 0, max: 10, step: 0.1 }, saleCostRate: { min: 0, max: 10, step: 0.1 }, annualHoldingRate: { min: 0, max: 5, step: 0.1 },
  renovationCost: { min: 0, max: 300, step: 1 }, incomeDrop: { min: 0, max: 80, step: 5 },
}

const money = (value: number, digits = 1) => `${value.toLocaleString('zh-CN', { minimumFractionDigits: digits, maximumFractionDigits: digits })} 万`
const percent = (value: number, digits = 1) => Number.isFinite(value) ? `${value.toFixed(digits)}%` : '不可承受'
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
const motionBehavior = (): ScrollBehavior => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char] ?? char)

function showToast(message: string, icon = 'ph-check-circle') {
  const toast = document.querySelector<HTMLElement>('#toastRegion')
  if (!toast) return
  if (toastTimer !== null) window.clearTimeout(toastTimer)
  toast.classList.remove('is-visible')
  toast.innerHTML = `<i class="ph ${icon}"></i><span>${message}</span>`
  window.requestAnimationFrame(() => toast.classList.add('is-visible'))
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible')
    toastTimer = null
  }, 3200)
}

function showExportSuccess() {
  const button = document.querySelector<HTMLButtonElement>('#saveReport')
  if (!button) return
  if (exportFeedbackTimer !== null) window.clearTimeout(exportFeedbackTimer)
  button.classList.add('is-success')
  const icon = button.querySelector<HTMLElement>('i')
  const label = button.querySelector<HTMLElement>('[data-save-label]')
  if (icon) icon.className = 'ph ph-check'
  if (label) label.textContent = '已导出'
  button.setAttribute('aria-label', '报告已导出')
  exportFeedbackTimer = window.setTimeout(() => {
    button.classList.remove('is-success')
    if (icon) icon.className = 'ph ph-download-simple'
    if (label) label.textContent = '导出报告'
    button.setAttribute('aria-label', '导出报告')
    exportFeedbackTimer = null
  }, 1800)
}

function setMenuState(open: boolean) {
  const topbar = document.querySelector('.topbar')
  const button = document.querySelector<HTMLButtonElement>('.menu-button')
  topbar?.classList.toggle('nav-open', open)
  button?.setAttribute('aria-expanded', String(open))
  button?.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单')
}

function loadLocalState() {
  try {
    const saved = JSON.parse(localStorage.getItem('asset-divergence-state-v1') ?? 'null')
    if (saved?.inputs) inputs = { ...defaults, ...saved.inputs }
    if (saved?.candidates?.length === 3) candidates = saved.candidates
    if (saved?.viewMode === 'rent' || saved?.viewMode === 'self') viewMode = saved.viewMode
  } catch { /* corrupted local state falls back to defaults */ }
}

function persistLocalState() {
  localStorage.setItem('asset-divergence-state-v1', JSON.stringify({ inputs, candidates, viewMode }))
}

function inputField(key: InputKey, label: string, unit: string, help: string) {
  const value = inputs[key]
  const bounds = sliderBounds[key]
  const progress = clamp((value - bounds.min) / (bounds.max - bounds.min) * 100, 0, 100)
  return `<div class="field range-field ${key === 'appreciation' && value < 0 ? 'is-negative' : ''}" data-field="${key}">
    <div class="range-meta"><span class="field-label">${label}<button class="help" type="button" aria-label="${label}说明" title="${help}"><i class="ph ph-info"></i></button></span><label class="range-output"><span class="sr-only">精确输入${label}</span><input data-key="${key}" data-input-kind="number" aria-label="精确输入${label}" type="number" inputmode="decimal" value="${value}" step="${bounds.step}" min="${bounds.min}" max="${bounds.max}" /><i>${unit}</i></label></div>
    <input class="range-control" data-key="${key}" data-input-kind="range" aria-label="拖拽调整${label}" type="range" value="${clamp(value, bounds.min, bounds.max)}" step="${bounds.step}" min="${bounds.min}" max="${bounds.max}" style="--range-progress:${progress}%" />
    <small><span data-help>${help}</span><span>${bounds.min}${unit} — ${bounds.max}${unit}</span></small><span class="field-error" role="alert"></span>
  </div>`
}

function validateInputs() {
  const errors = new Map<InputKey, string>()
  if (inputs.downPayment > inputs.homePrice) errors.set('downPayment', '首付不能高于房屋总价')
  if (inputs.providentLoan > Math.max(0, inputs.homePrice - inputs.downPayment)) errors.set('providentLoan', '公积金贷款不能高于剩余房款')
  if (inputs.years > inputs.loanYears) errors.set('years', '可以超过贷款期限，模型会在还清后停止计月供')
  document.querySelectorAll<HTMLElement>('[data-field]').forEach((root) => {
    const key = root.dataset.field as InputKey
    const message = errors.get(key) ?? ''
    root.classList.toggle('has-error', Boolean(message) && key !== 'years')
    const error = root.querySelector<HTMLElement>('.field-error')
    if (error) error.textContent = message
  })
  return !errors.has('downPayment') && !errors.has('providentLoan')
}

function syncFieldControls(key?: InputKey) {
  document.querySelectorAll<HTMLElement>(key ? `[data-field="${key}"]` : '[data-field]').forEach((root) => {
    const fieldKey = root.dataset.field as InputKey
    const bounds = sliderBounds[fieldKey]
    root.querySelectorAll<HTMLInputElement>('input[data-key]').forEach((control) => {
      control.value = control.type === 'range' ? String(clamp(inputs[fieldKey], bounds.min, bounds.max)) : String(inputs[fieldKey])
      if (control.type === 'range') control.style.setProperty('--range-progress', `${clamp((inputs[fieldKey] - bounds.min) / (bounds.max - bounds.min) * 100, 0, 100)}%`)
    })
  })
}

function riskLevel(ratio: number) {
  if (!Number.isFinite(ratio) || ratio >= 50) return { label: '高风险', tone: 'rose', note: '现金流对收入波动非常敏感' }
  if (ratio >= 35) return { label: '压力区', tone: 'amber', note: '需要预留更厚的应急资金' }
  return { label: '相对稳健', tone: 'teal', note: '仍需结合家庭固定支出判断' }
}

function scenarioMatrixMarkup() {
  const matrix = scenarioMatrix(inputs, viewMode)
  return `<article class="matrix-card"><div class="card-kicker">双变量压力测试 · 差额（买房 − 理财）</div><div class="matrix-scroll"><table class="scenario-matrix"><thead><tr><th>理财收益 \ 房价</th>${[-5, 0, 3, 5].map((rate) => `<th>${rate > 0 ? '+' : ''}${rate}%</th>`).join('')}</tr></thead><tbody>${matrix.map((row) => `<tr><th>${row.wealthYield.toFixed(1)}%</th>${row.outcomes.map((value) => `<td class="${value >= 0 ? 'matrix-positive' : 'matrix-negative'}">${value >= 0 ? '+' : ''}${value.toFixed(0)}万</td>`).join('')}</tr>`).join('')}</tbody></table></div><p>绿色表示买房终值更高，红色表示租住/理财路径更高。点击下方情景可快速回填。</p></article>`
}

function wealthChartMarkup() {
  const timeline = calculateWealthTimeline(inputs, viewMode)
  const buyLabel = viewMode === 'rent' ? '买房 · 房产净值 + 租金账户' : '买房 · 房产净值'
  const investLabel = viewMode === 'self' ? '持有现金 · 理财账户（已计租金）' : '持有现金 · 理财账户'
  return `<article class="wealth-chart-card" aria-labelledby="wealthChartTitle"><div class="wealth-chart-head"><div><span class="card-kicker">YEAR-BY-YEAR TOTAL ASSETS</span><h4 id="wealthChartTitle">总资产随年份变化</h4></div><div class="chart-legend" aria-label="图例"><span><i class="buy-dot"></i>${buyLabel}</span><span><i class="cash-dot"></i>${investLabel}</span></div></div><div class="wealth-chart-stage"><canvas data-wealth-chart tabindex="0" role="img" aria-describedby="wealthChartNote wealthChartData" aria-label="买房与持有现金总资产逐年变化曲线，可使用左右方向键查看各年份"></canvas><output class="chart-tooltip" data-chart-tooltip hidden aria-live="polite"></output></div><p id="wealthChartNote">口径与终值卡一致：买房路径按净卖房权益计算；持有现金路径包含未购房资金与每月现金流差额的理财终值。</p><div class="sr-only" id="wealthChartData">逐年数据：${timeline.map((point) => `${point.year === 0 ? '现在' : `${point.year}年`}，${buyLabel}${money(point.buyWealth)}，${investLabel}${money(point.investWealth)}`).join('；')}</div></article>`
}

function mountWealthChart(root = document.querySelector<HTMLElement>('#calculation-results')) {
  disposeWealthChart()
  disposeWealthChart = root ? initWealthChart(root, calculateWealthTimeline(inputs, viewMode), {
    buyLabel: viewMode === 'rent' ? '买房总资产' : '买房净资产',
    investLabel: '持有现金总资产',
  }) : () => undefined
}

function resultsPanelMarkup(result: FinanceResult) {
  const positive = result.difference >= 0
  const risk = riskLevel(result.paymentRatio)
  const stress = riskLevel(result.stressedPaymentRatio)
  return `<div class="results-head"><div><span class="eyebrow">CALCULATION OUTPUT</span><h3>同一笔现金流，${inputs.years} 年后会去哪？</h3></div><div class="scenario-switch" role="group" aria-label="使用场景"><button class="scenario-toggle ${viewMode === 'self' ? 'active' : ''}" data-view="self" aria-pressed="${viewMode === 'self'}">自住对比</button><button class="scenario-toggle ${viewMode === 'rent' ? 'active' : ''}" data-view="rent" aria-pressed="${viewMode === 'rent'}">出租对比</button></div></div>
  ${wealthChartMarkup()}
  <div class="result-grid"><article class="decision-card ${positive ? 'positive' : 'negative'}"><div class="card-kicker">${inputs.years} 年后 · 当前假设</div><div class="decision-row"><strong>${positive ? '买房路径占优' : '租住理财占优'}</strong><span class="decision-badge">差额 ${positive ? '+' : '−'}${money(Math.abs(result.difference))}</span></div><p>${positive ? '房产净值' : '替代投资'}在这组参数下更高；结论会随涨幅、租金和持有期变化。</p><div class="metric-foot"><span>房价年涨幅临界值</span><b>${percent(result.breakEven)}</b></div></article>
  <article class="wealth-card"><div class="card-kicker">终值对比</div><div class="wealth-values"><div><span>买房路径</span><b>${money(result.buyWealth)}</b></div><i class="ph ph-arrows-left-right"></i><div><span>${viewMode === 'self' ? '租住 + 理财' : '只做理财'}</span><b>${money(result.investWealth)}</b></div></div><div class="formula-mini">净卖房权益已扣 ${inputs.saleCostRate}% 卖出成本</div></article>
  <article class="risk-card"><div class="card-kicker">家庭现金流压力</div><div class="risk-main"><strong>${percent(result.paymentRatio)}</strong><span class="risk-pill ${risk.tone}">${risk.label}</span></div><div class="risk-meter"><i style="width:${clamp(result.paymentRatio, 0, 100)}%"></i><em></em></div><p>月供与持有成本约 <b>${Math.round(result.mortgage + inputs.homePrice * inputs.annualHoldingRate / 1200 * 10000).toLocaleString('zh-CN')}</b> 元；收入下降 ${inputs.incomeDrop}% 后占比 <b class="${stress.tone}">${percent(result.stressedPaymentRatio)}</b>。</p></article></div>
  <div class="snapshot-grid cost-ledger"><div><span>房产终值</span><strong>${money(result.homeValue)}</strong><small>剩余贷款 ${money(result.balance)}</small></div><div><span>买入 + 装修成本</span><strong>${money(result.acquisitionCost)}</strong><small>未含首付</small></div><div><span>累计利息</span><strong>${money(result.interestPaid)}</strong><small>已归还本金 ${money(result.repaidPrincipal)}</small></div><div><span>累计持有成本</span><strong>${money(result.holdingCost)}</strong><small>维护、物业与机会性支出</small></div></div>
  ${scenarioMatrixMarkup()}
  <div class="insight-note"><span class="note-icon"><i class="ph ph-lightbulb"></i></span><p><b>模型提示：</b>当前临界涨幅为 ${percent(result.breakEven)}。这不是房价预测，而是在所有其他输入不变时，使两条现金流路径终值相等的数值解。</p></div>`
}

function scoreCandidate(candidate: Candidate) {
  return criteria.reduce((total, item) => total + candidate.scores[item.key] / 5 * item.weight, 0)
}

function scoreLabel(score: number) {
  if (score >= 80) return { label: '稀缺资产候选', tone: 'teal', note: '综合竞争力强，仍需核验价格与具体瑕疵' }
  if (score >= 60) return { label: '居住与现金流型', tone: 'amber', note: '有明确优势，也存在需要价格补偿的短板' }
  return { label: '高折旧风险型', tone: 'rose', note: '同质化或流动性短板明显，谨慎使用高杠杆' }
}

function selectionMarkup() {
  const candidate = candidates[activeCandidate]
  const score = scoreCandidate(candidate)
  const category = scoreLabel(score)
  return `<div class="section-intro"><div><div class="overline">03 / PROPERTY SCORECARD</div><h2>把“喜欢”拆成可核验的分数</h2></div><p>评分只是尽调清单，不是自动估值。每一分都应由通勤记录、挂牌成交与实地看房证据支持。</p></div>
  <div class="scorecard-layout"><div class="candidate-panel"><div class="candidate-tabs" role="tablist">${candidates.map((item, index) => `<button role="tab" data-candidate="${index}" class="${index === activeCandidate ? 'active' : ''}" aria-selected="${index === activeCandidate}">${String.fromCharCode(65 + index)}</button>`).join('')}</div><label class="candidate-name">房源名称<input id="candidateName" value="${escapeHtml(candidate.name)}" maxlength="40" /></label><div class="score-summary"><div class="score-ring" style="--score:${score}"><strong>${score.toFixed(0)}</strong><small>/ 100</small></div><div><span class="risk-pill ${category.tone}">${category.label}</span><p>${category.note}</p></div></div>
  <div class="score-fields">${criteria.map((item) => `<label class="score-field"><span><i class="ph ${item.icon}"></i><b>${item.label}</b><small>权重 ${item.weight}%</small></span><input type="range" min="1" max="5" step="1" value="${candidate.scores[item.key]}" data-score="${item.key}" aria-label="${item.label}评分" /><output>${candidate.scores[item.key]} / 5</output><em>${item.help}</em></label>`).join('')}</div></div>
  <div class="comparison-panel"><div class="panel-head"><div><span class="eyebrow">SIDE-BY-SIDE</span><h3>三个候选，一眼比较</h3></div><button class="reset-button" id="resetCandidates">重置样例</button></div><div class="comparison-list">${candidates.map((item, index) => { const itemScore = scoreCandidate(item); const itemCategory = scoreLabel(itemScore); return `<button data-candidate="${index}" class="comparison-row ${index === activeCandidate ? 'active' : ''}"><span>${String.fromCharCode(65 + index)}</span><div><b>${escapeHtml(item.name)}</b><small>${itemCategory.label}</small></div><strong>${itemScore.toFixed(0)}</strong><i class="ph ph-caret-right"></i></button>` }).join('')}</div><div class="evidence-checklist"><h4>看房时必须留下的证据</h4><ul><li><i class="ph ph-check-circle"></i>早晚高峰门到门通勤实测</li><li><i class="ph ph-check-circle"></i>同小区近 90 天挂牌与成交变化</li><li><i class="ph ph-check-circle"></i>噪声、采光、电梯与物业现场记录</li><li><i class="ph ph-check-circle"></i>税费、贷款资格与产权信息复核</li></ul></div></div></div>`
}

function render() {
  const result = calculateFinance(inputs, viewMode)
  const commercialLoan = result.commercialLoan
  const heroMapUrl = `${import.meta.env.BASE_URL}assets/beijing-map-transparent.webp`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="topbar"><a class="brand" href="#top" aria-label="资产分化首页"><span class="brand-mark brand-map-logo"><img src="${heroMapUrl}" alt="" aria-hidden="true" /></span><span class="brand-name"><b>资产分化</b><small>ASSET DIVERGENCE LAB</small></span></a><nav id="mainNav"><a href="#model">决策模型</a><a href="#taxonomy">资产分类</a><a href="#selection">选房框架</a></nav><a class="topbar-cta" href="#model">开始测算</a><button class="menu-button" aria-label="打开菜单" aria-controls="mainNav" aria-expanded="false"><i class="ph ph-list menu-open-icon"></i><i class="ph ph-x menu-close-icon"></i></button></header>
  <main id="top"><section class="hero reference-hero"><div class="hero-content section-shell"><div class="hero-copy"><div class="hero-kicker">资产分化</div><h1><span>房子不再</span><br /><em>一起上涨</em></h1><div class="hero-rule"></div><p>用数据看清真实差异，找到穿越周期的资产。</p><div class="hero-actions"><button class="primary-button" id="startCalc">开始测算 <i class="ph ph-arrow-right"></i></button></div></div><figure class="hero-map-visual hero-map-interactive" id="heroMap3d" data-texture="${heroMapUrl}" aria-label="可交互的北京核心区三维地图" aria-describedby="mapInteractionHint" tabindex="0"><canvas id="heroMapCanvas" aria-hidden="true"></canvas><img class="hero-map-fallback" src="${heroMapUrl}" alt="北京行政区立体城市模型" /><div class="map-hotspots"><button class="map-label label-haidian" type="button" data-map-district="haidian" aria-label="进入海淀区区域地图" aria-pressed="false"><b>海淀区</b><span class="positive">+2.1%</span></button><button class="map-label label-chaoyang" type="button" data-map-district="chaoyang" aria-label="进入朝阳区区域地图" aria-pressed="false"><b>朝阳区</b><span class="positive">+1.3%</span></button><button class="map-label label-shijingshan" type="button" data-map-district="shijingshan" aria-label="进入石景山区区域地图" aria-pressed="false"><b>石景山区</b><span class="negative">−3.6%</span></button><button class="map-label label-xicheng" type="button" data-map-district="xicheng" aria-label="进入西城区区域地图" aria-pressed="false"><b>西城区</b><span class="positive">+3.4%</span></button><button class="map-label label-fengtai" type="button" data-map-district="fengtai" aria-label="进入丰台区区域地图" aria-pressed="false"><b>丰台区</b><span class="positive">+0.6%</span></button><button class="map-label label-tongzhou" type="button" data-map-district="tongzhou" aria-label="进入通州区区域地图" aria-pressed="false"><b>通州区</b><span class="negative">−1.8%</span></button><button class="map-label label-daxing" type="button" data-map-district="daxing" aria-label="进入大兴区区域地图" aria-pressed="false"><b>大兴区</b><span class="negative">−2.2%</span></button></div><canvas class="community-value-dots" id="communityValueDots" aria-label="按颜色显示的全部小区购买价值点位" hidden></canvas><div class="community-value-layer" id="communityValueLayer" aria-label="重点小区购买价值标记" hidden></div><aside class="map-value-legend" id="mapValueLegend" aria-label="购买价值分数图例" hidden><div><b>购买价值</b><small id="mapDataMode">示例模型 · 28 个</small></div><div class="value-filter-row" role="group" aria-label="筛选购买价值分数"><button type="button" data-value-filter="all" aria-pressed="true">全部</button><button class="tier-strong" type="button" data-value-filter="strong" aria-pressed="false"><i></i>80–100</button><button class="tier-watch" type="button" data-value-filter="watch" aria-pressed="false"><i></i>65–79</button><button class="tier-cautious" type="button" data-value-filter="cautious" aria-pressed="false"><i></i>0–64</button></div><div class="community-data-row"><label for="communityDataFile"><i class="ph ph-upload-simple"></i> 导入小区数据</label><input id="communityDataFile" type="file" accept=".json,application/json" /><small id="communityDataStatus">仅在浏览器本地读取</small></div></aside><aside class="map-detail" id="mapDistrictDetail" aria-live="polite" aria-label="北京核心区地图总览"><button class="map-back-button" type="button" id="exitDistrictMap" hidden aria-hidden="true"><i class="ph ph-arrow-left" aria-hidden="true"></i> 北京全图</button><div class="map-detail-copy"><b id="mapDistrictTitle">北京 · 核心区</b><span id="mapDistrictSummary">点击区县进入区域地图，拖拽地图可调整视角。</span></div><div class="map-detail-stats" id="mapDistrictStats" hidden></div></aside><div class="map-controls"><span id="mapInteractionHint"><i class="ph ph-cursor-click"></i> 点击区县进入详情 · 拖拽旋转</span><button type="button" id="resetMapView" aria-label="返回北京全图并重置视角"><i class="ph ph-arrow-counter-clockwise"></i></button></div></figure><nav class="capability-dock" aria-label="网站能力"><a class="capability-card" href="#model"><i class="ph ph-chart-line-up"></i><span><b>数据驱动决策</b><small>多维数据交叉验证</small></span></a><a class="capability-card" href="#taxonomy"><i class="ph ph-crosshair"></i><span><b>分区域精细测算</b><small>看清板块真实潜力</small></span></a><a class="capability-card" href="#selection"><i class="ph ph-shield-check"></i><span><b>动态情景分析</b><small>应对不确定的未来</small></span></a></nav><a class="scroll-cue" href="#model" aria-label="向下滚动到测算器"><i class="ph ph-mouse-scroll"></i><span>向下滚动</span></a></div></section>
  <section class="model-section section-shell" id="model"><div class="calculator-workspace"><div class="calculator-heading"><div><div class="overline">ASSET DIVERGENCE CALCULATOR</div><h2>资产分化测算器</h2><p>输入真实条件，测算不同区域资产的未来表现。</p></div><button class="save-button" id="saveReport" aria-label="导出报告"><i class="ph ph-download-simple"></i><span data-save-label>导出报告</span></button></div><div class="model-layout" data-reveal><aside class="input-panel"><div class="panel-head"><div><span class="eyebrow">INPUT VARIABLES</span><h3>输入你的真实方案</h3></div><button class="reset-button" id="resetInputs"><i class="ph ph-arrow-counter-clockwise"></i>重置</button></div><div class="input-group"><div class="group-title">核心参数 <span>单位：万元</span></div>${inputField('homePrice', '房屋总价', '万', '合同成交总价，不含税费和装修')}${inputField('downPayment', '首付金额', '万', '实际占用的首笔现金')}${inputField('monthlyRent', '同类月租金', '万', viewMode === 'self' ? '不买这套房时，同等居住体验的月租金' : '预计每月可收取的毛租金')}${inputField('income', '家庭月净收入', '万', '税后且可稳定用于家庭预算的月收入')}${inputField('years', '计划持有年限', '年', '模型按月计算，到期假设卖出')}</div><div class="input-group"><div class="group-title">市场假设 <span>不是预测</span></div>${inputField('appreciation', '房价年涨幅', '%', '允许负值，按复利计算')}<div class="growth-presets" aria-label="房价涨幅快捷情景"><button data-growth="-5">压力 −5%</button><button data-growth="0">持平 0%</button><button data-growth="3">温和 +3%</button></div>${inputField('wealthYield', '理财年收益率', '%', '替代投资的税费后年化收益')}${inputField('rentGrowth', '租金年变化', '%', '租金每满一年调整一次')}</div><details class="advanced-inputs"><summary><span><i class="ph ph-caret-right"></i>贷款、成本与压力参数</span><small>展开 9 项</small></summary><div class="input-group">${inputField('providentLoan', '公积金贷款', '万', '剩余贷款自动计入商贷')}${inputField('providentRate', '公积金利率', '%', '默认采用首套 5 年以上 2.6% 作为示例')}${inputField('commercialRate', '商业贷款利率', '%', `当前自动计算商贷 ${commercialLoan.toFixed(0)} 万`)}${inputField('loanYears', '贷款年限', '年', '等额本息贷款期限')}${inputField('purchaseCostRate', '买入税费/中介', '%', '按总价估算，可按实际情况修改')}${inputField('saleCostRate', '卖出成本', '%', '按卖出房产价值扣除')}${inputField('annualHoldingRate', '年持有成本', '%', '物业、维护与更新等年化估算')}${inputField('renovationCost', '装修与一次性支出', '万', '与首付一起计入初始机会成本')}${inputField('incomeDrop', '压力收入降幅', '%', '用于测算收入下降后的月供占比')}</div></details></aside><div class="results-panel" id="calculation-results">${resultsPanelMarkup(result)}</div><p class="sr-only" id="result-announcer" aria-live="polite"></p></div></div></section>
  <section class="taxonomy-section section-shell" id="taxonomy"><div class="section-intro" data-reveal><div><div class="overline">02 / SCENARIO PRESETS</div><h2>先跑情景，不猜结论</h2></div><p>三类资产是用于压力测试的假设组合，不是对具体小区的自动判定。</p></div><div class="taxonomy-grid" data-reveal>${(Object.entries(scenarios) as [Scenario, typeof scenarios[Scenario]][]).map(([key, item], index) => `<button class="taxonomy-card ${item.tone}" data-scenario="${key}" aria-pressed="${key === activeScenario}"><span class="taxonomy-index">0${index + 1}</span><div class="trend ${item.tone}"><i class="ph ${key === 'decline' ? 'ph-trend-down' : 'ph-trend-up'}"></i></div><div class="taxonomy-tag">${item.eyebrow}</div><h3>${item.label}</h3><p>${item.description}</p><div class="taxonomy-data"><span>涨幅假设 <b>${item.appreciation > 0 ? '+' : ''}${item.appreciation}%</b></span><span>租售比参考 <b>${item.rentRatio}%</b></span></div><span class="select-mark">套用此情景 <i class="ph ph-arrow-up-right"></i></span></button>`).join('')}</div></section>
  <section class="selection-section section-shell" id="selection">${selectionMarkup()}</section>
  <section class="method-section section-shell" id="method"><div class="section-intro"><div><div class="overline">04 / METHOD & SOURCES</div><h2>你能看见模型的边界</h2></div><p>本工具只在浏览器本地计算和保存，不上传你的收入、首付或房源评分。</p></div><div class="method-grid"><article><i class="ph ph-function"></i><h3>计算口径</h3><p>等额本息逐月摊还；租金与理财按月滚动；期末卖房净值扣除剩余贷款和卖出成本；临界涨幅用二分法求解。</p></article><article><i class="ph ph-database"></i><h3>政策与数据入口</h3><p>利率只是可编辑示例。资格、利率、税费和成交信息请在提交报价前从官方入口复核。</p><div class="source-links"><a href="https://gjj.beijing.gov.cn/web/zwgk61/2024zcwj/436433464/436433467/743903614/index.html" target="_blank" rel="noreferrer">北京公积金利率 <i class="ph ph-arrow-up-right"></i></a><a href="https://bjjs.zjw.beijing.gov.cn/eportal/ui?pageId=307749" target="_blank" rel="noreferrer">北京房地产数据 <i class="ph ph-arrow-up-right"></i></a><a href="https://zjw.beijing.gov.cn/bjjs/fdcjy/gfzg87/index.shtml" target="_blank" rel="noreferrer">购房资格核验 <i class="ph ph-arrow-up-right"></i></a></div></article><article class="disclaimer-card"><i class="ph ph-warning"></i><h3>风险声明</h3><p>结果不构成投资、贷款、税务或法律建议。模型不预测房价，也未纳入学区变化、重大维修、空置期、提前还款限制等所有个体因素。</p></article></div></section>
  <footer><span class="brand-mini">资产分化 / Asset Divergence Lab</span><span>开源买房决策实验工具 · v0.3</span><span>本地计算 · 不上传数据</span></footer><div class="toast-region" id="toastRegion" role="status" aria-live="polite" aria-atomic="true"></div></main>`
}

function refreshCalculator(syncInputs = true) {
  const result = calculateFinance(inputs, viewMode)
  const root = document.querySelector<HTMLElement>('#calculation-results')
  if (root) { root.innerHTML = resultsPanelMarkup(result); mountWealthChart(root); animateResults(root) }
  if (syncInputs) syncFieldControls()
  const commercialHelp = document.querySelector<HTMLElement>('[data-field="commercialRate"] [data-help]')
  if (commercialHelp) commercialHelp.textContent = `当前自动计算商贷 ${result.commercialLoan.toFixed(0)} 万`
  document.querySelectorAll<HTMLButtonElement>('[data-growth]').forEach((button) => button.classList.toggle('active', Number(button.dataset.growth) === inputs.appreciation))
  document.querySelectorAll<HTMLButtonElement>('[data-scenario]').forEach((button) => {
    const selected = button.dataset.scenario === activeScenario
    button.classList.toggle('selected', selected)
    button.setAttribute('aria-pressed', String(selected))
    const mark = button.querySelector<HTMLElement>('.select-mark')
    if (mark) mark.innerHTML = selected ? '已套用 <i class="ph ph-check"></i>' : '套用此情景 <i class="ph ph-arrow-up-right"></i>'
  })
  validateInputs()
  persistLocalState()
}

function refreshSelection() {
  const root = document.querySelector<HTMLElement>('#selection')
  if (root) root.innerHTML = selectionMarkup()
  persistLocalState()
}

function scheduleCalculatorRefresh() {
  if (calculationFrame !== null) return
  calculationFrame = requestAnimationFrame(() => { calculationFrame = null; refreshCalculator(false) })
}

function bindEvents() {
  const app = document.querySelector<HTMLElement>('#app')!
  app.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement
    const financeField = target.closest<HTMLInputElement>('input[data-key]')
    if (financeField) {
      const key = financeField.dataset.key as InputKey
      const value = Number(financeField.value)
      if (Number.isFinite(value)) { inputs[key] = value; if (key === 'appreciation') activeScenario = null; syncFieldControls(key); scheduleCalculatorRefresh() }
      return
    }
    if (target.matches('#candidateName')) { candidates[activeCandidate].name = target.value; persistLocalState(); return }
    const scoreField = target.closest<HTMLInputElement>('input[data-score]')
    if (scoreField) { candidates[activeCandidate].scores[scoreField.dataset.score as ScoreKey] = Number(scoreField.value); refreshSelection() }
  })
  app.addEventListener('change', (event) => {
    const target = event.target as HTMLElement
    if (target.matches('#candidateName')) { refreshSelection(); return }
    const field = target.closest<HTMLInputElement>('input[data-key]')
    if (!field) return
    const key = field.dataset.key as InputKey
    const bounds = sliderBounds[key]
    inputs[key] = clamp(inputs[key], bounds.min, bounds.max)
    syncFieldControls(key); refreshCalculator(false)
    const result = calculateFinance(inputs, viewMode)
    const announcer = document.querySelector<HTMLElement>('#result-announcer')
    if (announcer) announcer.textContent = `${inputs.years}年后，${result.difference >= 0 ? '买房路径' : '租住理财路径'}预计占优，差额${money(Math.abs(result.difference))}。`
  })
  app.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement
    if (target.closest('#mainNav a')) setMenuState(false)
    const growth = target.closest<HTMLButtonElement>('[data-growth]')
    if (growth) { inputs.appreciation = Number(growth.dataset.growth); activeScenario = null; refreshCalculator(); return }
    const scenario = target.closest<HTMLButtonElement>('[data-scenario]')
    if (scenario) {
      activeScenario = scenario.dataset.scenario as Scenario
      inputs.appreciation = scenarios[activeScenario].appreciation
      inputs.monthlyRent = inputs.homePrice * scenarios[activeScenario].rentRatio / 100 / 12
      refreshCalculator(); showToast(`已套用「${scenarios[activeScenario].label}」情景`, 'ph-sparkle'); document.querySelector('#model')?.scrollIntoView({ behavior: motionBehavior(), block: 'start' }); return
    }
    const view = target.closest<HTMLButtonElement>('[data-view]')
    if (view) { viewMode = view.dataset.view as ViewMode; refreshCalculator(false); return }
    const candidate = target.closest<HTMLButtonElement>('[data-candidate]')
    if (candidate) { activeCandidate = Number(candidate.dataset.candidate); refreshSelection(); return }
    if (target.closest('#resetCandidates')) { candidates = structuredClone(defaultCandidates); activeCandidate = 0; refreshSelection(); showToast('房源样例已重置', 'ph-arrow-counter-clockwise'); return }
    if (target.closest('#resetInputs')) { inputs = { ...defaults }; activeScenario = null; viewMode = 'self'; refreshCalculator(); showToast('测算参数已恢复默认值', 'ph-arrow-counter-clockwise'); return }
    if (target.closest('#startCalc')) { document.querySelector('#model')?.scrollIntoView({ behavior: motionBehavior() }); return }
    if (target.closest('#saveReport')) {
      const report = { generatedAt: new Date().toISOString(), modelVersion: '0.3', viewMode, inputs, result: calculateFinance(inputs, viewMode), wealthTimeline: calculateWealthTimeline(inputs, viewMode), candidates: candidates.map((item) => ({ ...item, score: scoreCandidate(item), classification: scoreLabel(scoreCandidate(item)).label })) }
      const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' }))
      const link = document.createElement('a'); link.href = url; link.download = '北京购房决策报告.json'; link.click(); URL.revokeObjectURL(url); showExportSuccess(); showToast('报告已导出到下载目录'); return
    }
    const menu = target.closest<HTMLButtonElement>('.menu-button')
    if (menu) setMenuState(!(menu.closest('.topbar')?.classList.contains('nav-open') ?? false))
  })
  document.querySelector('.topbar')?.addEventListener('keydown', (event) => {
    if ((event as KeyboardEvent).key === 'Escape') setMenuState(false)
  })
}

loadLocalState()
render()
mountWealthChart()
bindEvents()
const disposeMotion = initScrollMotion()
let disposeScene: () => void = () => undefined
const sceneHost = document.querySelector<HTMLElement>('#heroMap3d')
if (sceneHost) void import('./hero-map-3d').then(({ initHeroMap3d }) => initHeroMap3d(sceneHost)).then((cleanup) => { disposeScene = cleanup }).catch(() => sceneHost.classList.add('map-3d-fallback'))
window.addEventListener('beforeunload', () => { disposeScene(); disposeMotion(); disposeWealthChart() })
