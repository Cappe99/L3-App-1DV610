import { products } from '../data/products.js'

export class ProductController {

  listAllProducts (req, res, next) {
    res.render('products/index', { products })
  }

  showClickedProdukt (req, res, next) {
    const id = Number(req.params.id)
    const product = products.find(p => p.id === id)
    if (!product) {
      return res.status(404).render('errors/404')
    }
    res.render('products/show', { product })
  }
}
