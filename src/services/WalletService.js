/**
 *
 */
export class WalletService {
  #walletRepository
  /**
   *
   * @param walletRepository
   */
  constructor (walletRepository) {
    this.#walletRepository = walletRepository
  }

  /**
   *
   * @param amount
   */
  topUp (amount) {
    amount = Number(amount)
    if (amount <= 0) throw new Error('Ogiltigt belopp')
    const newBalance = Number(this.#walletRepository.getBalance()) + amount
    this.#walletRepository.updateBalance(newBalance)
    this.#walletRepository.addTransaction({
      type: 'topup',
      amount,
      success: null,
      error: null
    })
    return this.getWalletData()
  }

  /**
   *
   */
  getWalletData () {
    const balance = Number(this.#walletRepository.getBalance())

    return {
      balance,
      transactions: this.#walletRepository.getTransactions()
    }
  }

  /**
   *
   * @param amount
   */
  deduct (amount) {
    const balance = Number(this.#walletRepository.getBalance())
    if (balance < amount) throw new Error('Otillräckligt saldo')
    this.#walletRepository.updateBalance(balance - amount)
    this.#walletRepository.addTransaction({
      type: 'purchase',
      amount
    })
    return this.getWalletData()
  }
}
