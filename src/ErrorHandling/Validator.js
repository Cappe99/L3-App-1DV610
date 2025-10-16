/**
 *
 */
export default class Validator {
  /**
   *
   * @param walletService
   */
  constructor (walletService) {
    this.walletService = walletService
  }

  /**
   *
   * @param walletService
   * @param finalAmount
   */
  validateWalletBalance (finalAmount) {
    if (!this.walletService) return

    const balance = this.walletService.getWalletData().balance

    if (balance < finalAmount) {
      throw new Error('Inte tillräckligt med pengar i plånboken')
    }
  }

  /**
   *
   * @param amount
   */
  validateTopUp (amount) {
    amount = Number(amount)
    if (amount <= 0) throw new Error('Ogiltigt belopp')
  }

  /**
   *
   * @param amount
   */
  validateDeduct (amount) {
    const balance = Number(this.walletService.getWalletData().balance)
    if (balance < amount) {
      throw new Error('Otillräckligt saldo')
    }
  }
}
