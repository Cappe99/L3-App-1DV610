import { Cart } from 'l2-module-cart-and-discounts'
import { products } from '../data/products.js'

const cart = new Cart()
cart.discountManager.setFreeShippingThreshold(1000)
cart.discountManager.shippingCost = 49

/**
 *
 */
export class CartController {
  /**
   *
   * @param req
   * @param res
   * @param next
   */
  show (req, res, next) {
    res.render('cart/index', {
      items: cart.items,
      total: cart.getTotalPriceafterDiscounts(),
      shipping: cart.getShippingCost(),
      final: cart.getFinalPrice(),
      quantity: cart.getTotalQuantityInCart(),
      discountSuccess: false,
      discountCode: null
    })
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  add (req, res, next) {
    const id = Number(req.body.productId)
    const product = products.find(p => p.id === id)

    if (!product) {
      return res.status(404).send('Produkt hittades inte')
    }
    cart.addProductToCart(product)

    res.cookie('flash', 'Produkten sparades!')
    res.redirect('/products')
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  clear (req, res, next) {
    cart.clearCart()
    res.redirect('/cart')
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  remove (req, res, next) {
    const id = Number(req.body.productId)
    const product = products.find(p => p.id === id)

    if (!product) {
      return res.status(404).send('Produkt hittades inte')
    }

    cart.removeProductFromCart(product, 1)

    res.redirect('/cart')
  }

  /**
   *
   * @param req
   * @param res
   */
  applyDiscount (req, res) {
    const code = req.body.code
    const success = cart.discountManager.applyDiscountCode(code)

    res.render('cart/index', {
      items: cart.items,
      total: cart.getTotalPriceafterDiscounts(),
      shipping: cart.getShippingCost(),
      final: cart.getFinalPrice(),
      quantity: cart.getTotalQuantityInCart(),
      discountSuccess: success,
      discountCode: code
    })
  }
}
