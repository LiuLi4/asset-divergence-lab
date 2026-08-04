import { describe, expect, it } from 'vitest'
import { annuityPayment, calculateFinance, calculateWealthTimeline, findBreakEven, type FinanceInputs } from './finance'

const base: FinanceInputs = {
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

describe('finance model', () => {
  it('calculates a zero-rate annuity without interest', () => {
    expect(annuityPayment(120, 0, 120)).toBeCloseTo(10_000)
  })

  it('keeps terminal accounting internally consistent', () => {
    const result = calculateFinance(base, 'self')
    expect(result.commercialLoan).toBe(180)
    expect(result.equity).toBeCloseTo(result.homeValue * 0.99 - result.balance)
    expect(result.difference).toBeCloseTo(result.buyWealth - result.investWealth)
    expect(result.stressedPaymentRatio).toBeGreaterThan(result.paymentRatio)
  })

  it('solves a break-even rate close to zero difference', () => {
    const breakEven = findBreakEven(base, 'self')
    const result = calculateFinance({ ...base, appreciation: breakEven }, 'self')
    expect(Math.abs(result.difference)).toBeLessThan(0.01)
  })

  it('does not count rent cash flow in self-use mode', () => {
    const selfUse = calculateFinance(base, 'self')
    const rental = calculateFinance(base, 'rent')
    expect(rental.buyWealth).toBeGreaterThan(selfUse.buyWealth)
  })

  it('builds a yearly wealth timeline that matches the terminal calculation', () => {
    const timeline = calculateWealthTimeline(base, 'self')
    const result = calculateFinance(base, 'self')

    expect(timeline).toHaveLength(base.years + 1)
    expect(timeline[0].year).toBe(0)
    expect(timeline[timeline.length - 1].buyWealth).toBeCloseTo(result.buyWealth)
    expect(timeline[timeline.length - 1].investWealth).toBeCloseTo(result.investWealth)
  })
})
