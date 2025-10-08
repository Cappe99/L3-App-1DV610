import { Cart } from 'l2-module-cart-and-discounts'

/**
 *
 */
export class CartService {
  /**
   *
   * @param discountManager
   * @param productRepository
   */
  constructor (discountManager, productRepository) {
    this.cart = new Cart()
    this.discountManager = this.cart.discountManager
    this.productRepository = productRepository

    this.discountManager.setFreeShippingThreshold(1000)
    this.discountManager.shippingCost = 49
    this.discountManager.buyXPayForY(3, 2)
  }

  /**
   *
   */
  getSummary () {
    return {
      items: this.cart.items,
      total: this.cart.getTotalPriceafterDiscounts(),
      shipping: this.cart.getShippingCost(),
      final: this.cart.getFinalPrice(),
      quantity: this.cart.getTotalQuantityInCart()
    }
  }

  /**
   *
   * @param productId
   */
  addProduct (productId) {
    const product = this.productRepository.findById(productId)
    if (!product) {
      throw new Error('Product fail to find')
    }
    this.cart.addProductToCart(product)
  }

  /**
   *
   * @param productId
   */
  removeProduct (productId) {
    const product = this.productRepository.findById(productId)
    if (!product) {
      throw new Error('Product fail to find')
    }
    this.cart.removeProductFromCart(product, 1)
  }

  /**
   *
   */
  clearCart () {
    this.cart.clearCart()
  }

  /**
   *
   * @param code
   */
  applyDiscount (code) {
    return this.discountManager.applyDiscountCode(code)
  }
}
