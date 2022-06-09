import service from '../services/store.service.js'

export default {

    async getContent(_req, res) {
        const content = await service.getContent()
    
        res.send(content)
    },

    async setContent(req, res) {
        await service.setContent(req.params.content)

        res.send('Content set')
    },

    async updateContent(req, res) {
        const content = req.params.content

        if (!content) {
            res.sendStatus(400);
            throw new Error('Missing new content')
        }

        await service.updateContent(content)

        res.send('Content updated')
    },

    async deleteContent(_req, res) {
        await service.deleteContent()

        res.send('Content deleted')
    }
}
