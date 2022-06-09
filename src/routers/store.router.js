import express from 'express'
import fh from '../infras/file-handler.js'
import controller from '../controllers/store.controller.js'

const router = express.Router()

router.use(/\/$/, async (_req, res) => {
    let content = await fh.read('public/store/help.html')

    res.send(content)
})

router.route('/rest/:content?')
.get(controller.getContent)
.post(controller.updateContent)
.delete(controller.deleteContent)
.all((_req, res) => {
    res.send('Nothing here...')
})

router.get('/read', controller.getContent)
router.get('/write/:content?', controller.setContent)

export default router