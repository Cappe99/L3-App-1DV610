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
    res.render('cart/index', {
      ...this.cartService.getSummaryOfCart(),
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
    try {
      this.cartService.addProduct(Number(req.body.productId))
      res.cookie('flash', 'Produkten sparades!')
      res.redirect('/products')
    } catch (err) {
      res.status(404).send(err.message)
    }
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
    try {
      this.cartService.removeProduct(Number(req.body.productId))
      res.redirect('/cart')
    } catch (err) {
      res.status(404).send(err.message)
    }
  }

  /**
   *
   * @param req
   * @param res
   */
  applyDiscountCode (req, res) {
    const success = this.cartService.applyDiscount(req.body.code)
    res.render('cart/index', {
      ...this.cartService.getSummaryOfCart(),
      discountSuccess: success,
      discountCode: req.body.code
    })
  }

  /**
   *
   * @param req
   * @param res
   */
  checkout (req, res) {
    console.log('Kund trycker på checkout!')

    try {
      const summary = this.cartService.checkout()
      res.render('cart/index', {
        ...summary,
        discountSuccess: false,
        discountCode: null,
        success: 'Tack för ditt köp! ',
        error: null
      })
    } catch (err) {
      console.log('Fel vid checkout:', err.message)
      res.render('cart/index', {
        ...this.cartService.getSummaryOfCart(),
        discountSuccess: false,
        discountCode: null,
        success: null,
        error: err.message
      })
    }
  }
}
