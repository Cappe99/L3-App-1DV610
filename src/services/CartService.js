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
    this.#cart.addProductToCart(this.#findProduct(productId))
  }

  /**
   *
   * @param productId
   */
  removeProduct (productId) {
    this.#cart.removeProductFromCart(this.#findProduct(productId), 1)
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
    const finalAmount = Number(this.#cart.getFinalPrice()) || 0

    if (this.#walletService && this.#walletService.getWalletData().balance < finalAmount) {
      throw new Error('Inte tillräckligt med pengar i plånboken')
    }

    if (this.#walletService) {
      this.#walletService.deduct(finalAmount)
    }

    this.#cart.clearCart()
    return this.getSummaryOfCart()
  }

  /**
   *
   * @param productId
   */
  #findProduct (productId) {
    const product = this.#productRepository.findById(productId)
    if (!product) throw new Error('Produkt hittades inte')
    return product
  }
}
