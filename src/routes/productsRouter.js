import express from 'express'
import { ProductController } from '../controllers/productController.js'

export const router = express.Router()
const controller = new ProductController()

router.get('/', (req, res, next) => controller.listAllProducts(req, res, next))
router.get('/:id', (req, res, next) => controller.showClickedProdukt(req, res, next))
