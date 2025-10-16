export default class Validator {

  constructor (walletService) {
    this.walletService = walletService
  }

  validateWalletBalance (finalAmount) {
    if (!this.walletService) return

    const balance = this.walletService.getWalletData().balance

    if (balance < finalAmount) {
      throw new Error('Inte tillräckligt med pengar i plånboken')
    }
  }

  validateTopUp (amount) {
    amount = Number(amount)
    if (amount <= 0) throw new Error('Ogiltigt belopp')
  }

  validateDeduct (amount) {
    const balance = Number(this.walletService.getWalletData().balance)
    if (balance < amount) {
      throw new Error('Otillräckligt saldo')
    }
  }
}
