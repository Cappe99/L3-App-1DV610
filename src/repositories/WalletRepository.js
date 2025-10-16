export class WalletRepository {
  #balance
  #transactions

  constructor () {
    this.#balance = 0
    this.#transactions = []
  }

  getBalance () {
    return this.#balance
  }

  getTransactions () {
    return this.#transactions
  }

  updateBalance (newBalance) {
    this.#balance = newBalance
  }

  addTransaction (transaction) {
    this.#transactions.unshift(transaction)
  }
}
