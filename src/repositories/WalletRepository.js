/**
 *
 */
export class WalletRepository {
  #balance
  #transactions
  /**
   *
   */
  constructor () {
    this.#balance = 0
    this.#transactions = []
  }

  /**
   *
   */
  getBalance () {
    return this.#balance
  }

  /**
   *
   */
  getTransactions () {
    return this.#transactions
  }

  /**
   *
   * @param newBalance
   */
  updateBalance (newBalance) {
    this.#balance = newBalance
  }

  /**
   *
   * @param transaction
   */
  addTransaction (transaction) {
    this.#transactions.unshift(transaction)
  }
}
