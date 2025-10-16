import Validator from '../ErrorHandling/Validator.js'
/**
 *
 */
export class WalletService {
  #walletRepository
  #validator
  /**
   *
   * @param walletRepository
   */
  constructor (walletRepository) {
    this.#walletRepository = walletRepository
    this.#validator = new Validator(this)
  }

  /**
   *
   * @param amount
   */
  topUp (amount) {
    this.#validator.validateTopUp(amount)

    const newBalance = Number(this.#walletRepository.getBalance()) + Number(amount)
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
    this.#validator.validateDeduct(amount)

    const newBalance = Number(this.#walletRepository.getBalance()) - Number(amount)
    this.#walletRepository.updateBalance(newBalance)
    this.#walletRepository.addTransaction({
      type: 'purchase',
      amount
    })

    return this.getWalletData()
  }
}
