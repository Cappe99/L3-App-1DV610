/**
 *
 */
export class WalletController {
  /**
   *
   * @param walletService
   */
  constructor (walletService) {
    this.walletService = walletService
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  showWallet (req, res, next) {
    try {
      const data = this.walletService.getWalletData()
      res.render('wallet/index', {
        title: 'Din plånbok',
        wallet: data,
        transactions: data.transactions,
        success: null,
        error: null
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  addFundsToWallet (req, res) {
    try {
      const amount = parseInt(req.body.amount, 10)
      this.walletService.topUp(amount)
      const data = this.walletService.getWalletData()
      res.render('wallet/index', {
        wallet: data,
        transactions: data.transactions,
        success: `Du har lagt till ${amount} kr!`,
        error: null
      })
    } catch (err) {
      const data = this.walletService.getWalletData()
      res.render('wallet/index', {
        balance: data.balance,
        transactions: data.transactions,
        success: null,
        error: err.message
      })
    }
  }
}
