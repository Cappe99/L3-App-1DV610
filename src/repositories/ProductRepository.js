import { products } from '../data/products.js'

export class ProductRepository {

  findById (id) {
    return products.find(p => p.id === id)
  }

  findAll () {
    return products
  }
}
