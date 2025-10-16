/**
 *
 */
export class WalletController {
  /**
   * @param walletService
   */
  constructor (walletService) {
    this.walletService = walletService
  }

  /**
   *
   * @param req
   * @param res
   */
  showWallet (req, res) {
    this.handleAction(res, () => {
      const data = this.walletService.getWalletData()
      this.renderWallet(res, { wallet: data, transactions: data.transactions })
    })
  }

  /**
   *
   * @param req
   * @param res
   */
  addFundsToWallet (req, res) {
    this.handleAction(res, () => {
      const amount = parseInt(req.body.amount, 10)

      this.walletService.topUp(amount)

      const data = this.walletService.getWalletData()
      this.renderWallet(res, {
        wallet: data,
        transactions: data.transactions,
        success: `Du har lagt till ${amount} kr!`
      })
    })
  }

  /**
   *
   * @param res
   * @param extraData
   */
  renderWallet (res, extraData = {}) {
    const defaults = {
      wallet: { balance: 0, transactions: [] },
      success: null,
      error: null
    }

    res.render('wallet/index', { ...defaults, ...extraData })
  }

  /**
   *
   * @param res
   * @param err
   */
  renderError (res, err) {
    this.renderWallet(res, { error: err.message })
  }

  /**
   *
   * @param res
   * @param action
   * @param errorHandler
   */
  handleAction (res, action, errorHandler) {
    try {
      action()
    } catch (err) {
      if (errorHandler) {
        errorHandler(err)
      } else {
        this.renderError(res, err)
      }
    }
  }
}
