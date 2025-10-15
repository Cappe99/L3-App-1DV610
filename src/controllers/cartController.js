/**
 *
 */
export class CartController {
  /**
   *
   * @param cartService
   */
  constructor (cartService) {
    this.cartService = cartService
  }

  /**
   *
   * @param req
   * @param res
   */
  showItemsInCart (req, res) {
    this.renderCart(res, {
      discountSuccess: false,
      discountCode: null,
      success: null,
      error: null
    })
  }

  /**
   *
   * @param req
   * @param res
   */
  addItemToCart (req, res) {
    this.handleAction(res, () => {
      const productId = Number(req.body.productId)
      this.cartService.addProduct(productId)
      res.cookie('flash', 'Produkten sparades!')
      res.redirect('/products')
    })
  }

  /**
   *
   * @param req
   * @param res
   */
  removeItemsInCart (req, res) {
    this.cartService.clearCart()
    res.redirect('/cart')
  }

  /**
   *
   * @param req
   * @param res
   */
  removeOneItemFromCart (req, res) {
    this.handleAction(res, () => {
      const productId = Number(req.body.productId)
      this.cartService.removeProduct(productId)
      res.redirect('/cart')
    })
  }

  /**
   *
   * @param req
   * @param res
   */
  applyDiscountCode (req, res) {
    try {
      const code = req.body.code
      const success = this.cartService.applyDiscount(code)
      this.renderCart(res, { discountSuccess: success, discountCode: code })
    } catch (err) {
      this.renderError(res, err)
    }
  }

  /**
   *
   * @param req
   * @param res
   */
  checkout (req, res) {
    this.handleAction(res, () => {
      const summary = this.cartService.checkout()
      this.renderCart(res, { ...summary, success: 'Tack för ditt köp!', error: null })
    }, this.renderError.bind(this, res))
  }

  /**
   *
   * @param res
   * @param extraData
   */
  renderCart (res, extraData = {}) {
    const defaults = {
      discountSuccess: false,
      discountCode: null,
      success: null,
      error: null
    }

    res.render('cart/index', {
      ...this.cartService.getSummaryOfCart(),
      ...defaults,
      ...extraData
    })
  }

  /**
   *
   * @param res
   * @param err
   */
  renderError (res, err) {
    console.error(err)
    this.renderCart(res, { discountSuccess: false, discountCode: null, success: null, error: err.message })
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
