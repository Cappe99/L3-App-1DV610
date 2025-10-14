import express from 'express'
import { WalletController } from '../controllers/WalletController.js'
import { walletService } from '../services/walletSingleton.js'

export const router = express.Router()
const controller = new WalletController(walletService)

router.get('/', (req, res) => controller.showWallet(req, res))
router.post('/topup', (req, res) => controller.topUp(req, res))
