import { products } from '../data/products.js'

/**
 *
 */
export class ProductRepository {
  /**
   *
   * @param id
   */
  findById (id) {
    return products.find(p => p.id === id)
  }

  /**
   *
   */
  findAll () {
    return products
  }
}
