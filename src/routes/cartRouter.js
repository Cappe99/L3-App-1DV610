import express from 'express'
import { CartController } from '../controllers/cartController.js'

export const router = express.Router()
const controller = new CartController()

router.get('/', (req, res, next) => controller.show(req, res, next))
router.post('/add', (req, res, next) => controller.add(req, res, next))
router.post('/clear', (req, res, next) => controller.clear(req, res, next))
