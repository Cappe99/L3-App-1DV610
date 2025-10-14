import { Cart } from 'l2-module-cart-and-discounts'

/**
 *
 */
export class CartService {
  #cart
  #discountManager
  #productRepository
  #walletService
  /**
   *
   * @param discountManager
   * @param productRepository
   * @param walletService
   */
  constructor (discountManager, productRepository, walletService = null) {
    this.#cart = new Cart()
    this.#discountManager = this.#cart.discountManager
    this.#productRepository = productRepository
    this.#walletService = walletService

    this.#discountManager.setFreeShippingThreshold(1000)
    this.#discountManager.shippingCost = 49
    this.#discountManager.buyXPayForY(3, 2)
  }

  /**
   *
   */
  getSummaryOfCart () {
    return {
      items: this.#cart.items,
      total: this.#cart.getTotalPriceafterDiscounts(),
      shipping: this.#cart.getShippingCost(),
      final: this.#cart.getFinalPrice(),
      quantity: this.#cart.getTotalQuantityInCart()
    }
  }

  /**
   *
   * @param productId
   */
  addProduct (productId) {
    const product = this.#productRepository.findById(productId)
    if (!product) {
      throw new Error('Product fail to find')
    }
    this.#cart.addProductToCart(product)
  }

  /**
   *
   * @param productId
   */
  removeProduct (productId) {
    const product = this.#productRepository.findById(productId)
    if (!product) {
      throw new Error('Product fail to find')
    }
    this.#cart.removeProductFromCart(product, 1)
  }

  /**
   *
   */
  clearCart () {
    this.#cart.clearCart()
  }

  /**
   *
   * @param code
   */
  applyDiscount (code) {
    return this.#discountManager.applyDiscountCode(code)
  }

  /**
   *
   */
  checkout () {
    let finalAmount = Number(this.#cart.getFinalPrice())
    if (isNaN(finalAmount)) finalAmount = 0

    if (this.#walletService) {
      const walletBalance = this.#walletService.getWalletData().balance
      if (walletBalance < finalAmount) {
        throw new Error('Inte tillräckligt med pengar i plånboken')
      }
      this.#walletService.deduct(finalAmount)
    }

    this.#cart.clearCart()
    return this.getSummaryOfCart()
  }
}
