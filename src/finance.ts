export type ViewMode = 'self' | 'rent'

export interface FinanceInputs {
  homePrice: number
  downPayment: number
  providentLoan: number
  providentRate: number
  commercialRate: number
  loanYears: number
  monthlyRent: number
  rentGrowth: number
  appreciation: number
  wealthYield: number
  income: number
  years: number
  purchaseCostRate: number
  saleCostRate: number
  annualHoldingRate: number
  renovationCost: number
  incomeDrop: number
}

export interface FinanceResult {
  commercialLoan: number
  mortgage: number
  homeValue: number
  balance: number
  equity: number
  buyWealth: number
  investWealth: number
  difference: number
  paymentRatio: number
  stressedPaymentRatio: number
  breakEven: number
  acquisitionCost: number
  holdingCost: number
  interestPaid: number
  rentPaidOrReceived: number
  repaidPrincipal: number
}

const toYuan = (wan: number) => wan * 10_000
const toWan = (yuan: number) => yuan / 10_000

export function annuityPayment(principalWan: number, annualRate: number, months: number) {
  if (principalWan <= 0 || months <= 0) return 0
  const principal = toYuan(principalWan)
  const monthlyRate = annualRate / 100 / 12
  if (monthlyRate === 0) return principal / months
  const factor = Math.pow(1 + monthlyRate, months)
  return principal * monthlyRate * factor / (factor - 1)
}

export function remainingPrincipal(principalWan: number, annualRate: number, months: number, paidMonths: number) {
  if (principalWan <= 0 || paidMonths >= months) return 0
  const principal = toYuan(principalWan)
  const monthlyRate = annualRate / 100 / 12
  const payment = annuityPayment(principalWan, annualRate, months)
  if (monthlyRate === 0) return toWan(Math.max(0, principal - payment * paidMonths))
  const factor = Math.pow(1 + monthlyRate, paidMonths)
  return toWan(Math.max(0, principal * factor - payment * (factor - 1) / monthlyRate))
}

function futureValue(initialWan: number, annualYield: number, monthlyFlowsYuan: number[]) {
  const monthlyYield = Math.pow(Math.max(0.01, 1 + annualYield / 100), 1 / 12) - 1
  let value = toYuan(initialWan)
  for (const flow of monthlyFlowsYuan) value = value * (1 + monthlyYield) + flow
  return toWan(value)
}

function calculateAtGrowth(inputs: FinanceInputs, mode: ViewMode, appreciation: number, solveBreakEven: boolean): FinanceResult {
  const loanMonths = Math.round(inputs.loanYears * 12)
  const elapsedMonths = Math.min(Math.round(inputs.years * 12), loanMonths)
  const maxLoan = Math.max(0, inputs.homePrice - inputs.downPayment)
  const providentLoan = Math.min(inputs.providentLoan, maxLoan)
  const commercialLoan = Math.max(0, maxLoan - providentLoan)
  const providentPayment = annuityPayment(providentLoan, inputs.providentRate, loanMonths)
  const commercialPayment = annuityPayment(commercialLoan, inputs.commercialRate, loanMonths)
  const mortgage = providentPayment + commercialPayment
  const balance = remainingPrincipal(providentLoan, inputs.providentRate, loanMonths, elapsedMonths)
    + remainingPrincipal(commercialLoan, inputs.commercialRate, loanMonths, elapsedMonths)
  const homeValue = inputs.homePrice * Math.pow(Math.max(0.01, 1 + appreciation / 100), inputs.years)
  const equity = homeValue * (1 - inputs.saleCostRate / 100) - balance
  const acquisitionCost = inputs.homePrice * inputs.purchaseCostRate / 100 + inputs.renovationCost
  const upfrontCash = inputs.downPayment + acquisitionCost
  const monthlyHoldingYuan = toYuan(inputs.homePrice * inputs.annualHoldingRate / 100 / 12)
  const months = Math.round(inputs.years * 12)
  const alternativeFlows: number[] = []
  const propertyCashFlows: number[] = []
  let rentPaidOrReceivedYuan = 0
  let holdingCostYuan = 0

  for (let month = 0; month < months; month += 1) {
    const rent = toYuan(inputs.monthlyRent) * Math.pow(1 + inputs.rentGrowth / 100, Math.floor(month / 12))
    const activeMortgage = month < loanMonths ? mortgage : 0
    holdingCostYuan += monthlyHoldingYuan
    rentPaidOrReceivedYuan += rent
    if (mode === 'self') {
      alternativeFlows.push(activeMortgage + monthlyHoldingYuan - rent)
      propertyCashFlows.push(0)
    } else {
      alternativeFlows.push(activeMortgage + monthlyHoldingYuan)
      propertyCashFlows.push(rent)
    }
  }

  const investWealth = futureValue(upfrontCash, inputs.wealthYield, alternativeFlows)
  const propertyCash = mode === 'rent' ? futureValue(0, inputs.wealthYield, propertyCashFlows) : 0
  const buyWealth = equity + propertyCash
  const totalPrincipal = providentLoan + commercialLoan
  const paidMortgageMonths = Math.min(months, loanMonths)
  const interestPaid = Math.max(0, toWan(mortgage * paidMortgageMonths) - (totalPrincipal - balance))
  const paymentRatio = inputs.income <= 0 ? Infinity : (mortgage + monthlyHoldingYuan) / toYuan(inputs.income) * 100
  const stressedIncome = inputs.income * (1 - inputs.incomeDrop / 100)
  const stressedPaymentRatio = stressedIncome <= 0 ? Infinity : (mortgage + monthlyHoldingYuan) / toYuan(stressedIncome) * 100
  const result: FinanceResult = {
    commercialLoan,
    mortgage,
    homeValue,
    balance,
    equity,
    buyWealth,
    investWealth,
    difference: buyWealth - investWealth,
    paymentRatio,
    stressedPaymentRatio,
    breakEven: appreciation,
    acquisitionCost,
    holdingCost: toWan(holdingCostYuan),
    interestPaid,
    rentPaidOrReceived: toWan(rentPaidOrReceivedYuan),
    repaidPrincipal: totalPrincipal - balance,
  }

  if (solveBreakEven) result.breakEven = findBreakEven(inputs, mode)
  return result
}

export function calculateFinance(inputs: FinanceInputs, mode: ViewMode): FinanceResult {
  return calculateAtGrowth(inputs, mode, inputs.appreciation, true)
}

export function findBreakEven(inputs: FinanceInputs, mode: ViewMode) {
  let low = -20
  let high = 20
  let lowDifference = calculateAtGrowth(inputs, mode, low, false).difference
  const highDifference = calculateAtGrowth(inputs, mode, high, false).difference
  if (lowDifference >= 0) return low
  if (highDifference <= 0) return high
  for (let iteration = 0; iteration < 60; iteration += 1) {
    const middle = (low + high) / 2
    const difference = calculateAtGrowth(inputs, mode, middle, false).difference
    if (difference >= 0) high = middle
    else {
      low = middle
      lowDifference = difference
    }
  }
  return Math.abs(lowDifference) < 0.0001 ? low : high
}

export function scenarioMatrix(inputs: FinanceInputs, mode: ViewMode) {
  const growthRates = [-5, 0, 3, 5]
  const yields = [1.5, inputs.wealthYield, 5]
  return yields.map((wealthYield) => ({
    wealthYield,
    outcomes: growthRates.map((appreciation) => calculateAtGrowth({ ...inputs, wealthYield }, mode, appreciation, false).difference),
  }))
}
