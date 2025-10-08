import express from 'express'
import { CartController } from '../controllers/cartController.js'
import { CartService } from '../services/CartService.js'
import { ProductRepository } from '../repositories/ProductRepository.js'

export const router = express.Router()

const productRepository = new ProductRepository()
const cartService = new CartService(null, productRepository)
const controller = new CartController(cartService)

router.get('/', (req, res, next) => controller.showItemsInCart(req, res, next))
router.post('/add', (req, res, next) => controller.addItemToCart(req, res, next))
router.post('/clear', (req, res, next) => controller.removeItemsInCart(req, res, next))
router.post('/remove', (req, res, next) => controller.removeOneItemFromCart(req, res, next))
router.post('/discount', (req, res) => controller.applyDiscountCode(req, res))
