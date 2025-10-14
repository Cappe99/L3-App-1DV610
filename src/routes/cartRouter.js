import express from 'express'
import { CartController } from '../controllers/cartController.js'
import { CartService } from '../services/CartService.js'
import { ProductRepository } from '../repositories/ProductRepository.js'
import { walletService } from '../services/walletSingleton.js'

export const router = express.Router()

const productRepository = new ProductRepository()
const cartService = new CartService(null, productRepository, walletService)
const controller = new CartController(cartService)

router.get('/', (req, res) => controller.showItemsInCart(req, res))
router.post('/add', (req, res) => controller.addItemToCart(req, res))
router.post('/clear', (req, res) => controller.removeItemsInCart(req, res))
router.post('/remove', (req, res) => controller.removeOneItemFromCart(req, res))
router.post('/discount', (req, res) => controller.applyDiscountCode(req, res))
router.post('/checkout', (req, res) => controller.checkout(req, res))
