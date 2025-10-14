import express from 'express'
import http from 'node:http'
import { router as homeRouter } from './homeRouter.js'
import { router as productsRouter } from './productsRouter.js'
import { router as cartRouter } from './cartRouter.js'
import { router as walletRouter } from './walletRounter.js'

export const router = express.Router()

router.use('/', homeRouter)
router.use('/products', productsRouter)
router.use('/cart', cartRouter)
router.use('/wallet', walletRouter)

router.use('*', (req, res, next) => {
  const statusCode = 404
  const error = new Error(http.STATUS_CODES[statusCode])
  error.status = statusCode
  next(error)
})
