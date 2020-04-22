import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.all()
      .filter(f => f.type === 'income')
      .reduce((soma, current) => soma + current.value, 0);

    const outcome = this.all()
      .filter(f => f.type === 'outcome')
      .reduce((soma, current) => soma + current.value, 0);

    const balance = new Balance({ income, outcome });

    return balance;
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
