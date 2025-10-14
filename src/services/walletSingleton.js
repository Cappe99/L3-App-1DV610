import { WalletRepository } from '../repositories/WalletRepository.js'
import { WalletService } from './WalletService.js'

const walletRepository = new WalletRepository()
const walletService = new WalletService(walletRepository)

export { walletRepository, walletService }
