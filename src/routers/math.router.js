import express from 'express'
import controller from '../controllers/math.controller.js'

const router = express.Router()

router.use(/\/$/, controller.help)

router.get('/add', controller.add)
router.get('/sub', controller.sub)
router.get('/mul', controller.mul)
router.get('/div', controller.div)

export default router