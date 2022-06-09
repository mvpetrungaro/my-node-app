import fh from '../infras/file-handler.js'

export default {

    async getContent() {
        return await fh.read('store.dat')
    },

    async setContent(content) {
        if (content) {
            await this.updateContent(content)
        } else {
            await this.deleteContent()
        }
    },

    async updateContent(content) {
        await fh.write('store.dat', content)
    },

    async deleteContent() {
        await fh.write('store.dat', '')
    }
}
