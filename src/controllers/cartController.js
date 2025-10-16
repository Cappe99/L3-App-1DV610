
export class CartController {

  constructor (cartService) {
    this.cartService = cartService
  }

  showItemsInCart (req, res) {
    this.renderCart(res, {
      discountSuccess: false,
      discountCode: null,
      success: null,
      error: null
    })
  }

  addItemToCart (req, res) {
    this.handleAction(res, () => {
      const productId = Number(req.body.productId)
      this.cartService.addProduct(productId)
      res.cookie('flash', 'Produkten sparades!')
      res.redirect('/products')
    })
  }

  removeItemsInCart (req, res) {
    this.cartService.clearCart()
    res.redirect('/cart')
  }

  removeOneItemFromCart (req, res) {
    this.handleAction(res, () => {
      const productId = Number(req.body.productId)
      this.cartService.removeProduct(productId)
      res.redirect('/cart')
    })
  }

  applyDiscountCode (req, res) {
    try {
      const code = req.body.code
      const success = this.cartService.applyDiscount(code)
      this.renderCart(res, { discountSuccess: success, discountCode: code })
    } catch (err) {
      this.renderError(res, err)
    }
  }

  checkout (req, res) {
    this.handleAction(res, () => {
      const summary = this.cartService.checkout()
      this.renderCart(res, { ...summary, success: 'Tack för ditt köp!', error: null })
    }, this.renderError.bind(this, res))
  }

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

  renderError (res, err) {
    this.renderCart(res, { discountSuccess: false, discountCode: null, success: null, error: err.message })
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
