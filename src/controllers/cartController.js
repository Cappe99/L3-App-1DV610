import { Cart } from 'l2-module-cart-and-discounts'
import { products } from '../data/products.js'

const cart = new Cart()

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
      quantity: cart.getTotalQuantityInCart()
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
}
