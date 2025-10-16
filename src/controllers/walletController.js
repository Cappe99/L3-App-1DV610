
export class WalletController {

  constructor (walletService) {
    this.walletService = walletService
  }

  showWallet (req, res) {
    this.handleAction(res, () => {
      const data = this.walletService.getWalletData()
      this.renderWallet(res, { wallet: data, transactions: data.transactions })
    })
  }

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

  renderWallet (res, extraData = {}) {
    const defaults = {
      wallet: { balance: 0, transactions: [] },
      success: null,
      error: null
    }

    res.render('wallet/index', { ...defaults, ...extraData })
  }

  renderError (res, err) {
    this.renderWallet(res, { error: err.message })
  }

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
