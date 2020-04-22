class Balance {
  income: number;

  outcome: number;

  total: number;

  constructor({ income, outcome }: Omit<Balance, 'total'>) {
    this.income = income;
    this.outcome = outcome;
    this.total = this.income - this.outcome;
  }
}

export default Balance;
