import fh from '../infras/file-handler.js'
import service from '../services/math.service.js'

export default {
    async help(_req, res) {
        let content = await fh.read('public/math/help.html')

        res.send(content)
    },

    async add(req, res) {
        try {
            if (isNaN(req.query.a) || isNaN(req.query.b)) {
                throw new Error('Invalid numbers: ' + JSON.stringify(req.query))
            }

            const a = parseFloat(req.query.a)
            const b = parseFloat(req.query.b)

            const result = await service.add(a, b)

            res.send(result.toString())
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    },

    async sub(req, res) {
        try {
            if (isNaN(req.query.a) || isNaN(req.query.b)) {
                throw new Error('Invalid numbers: ' + JSON.stringify(req.query))
            }

            const a = parseFloat(req.query.a)
            const b = parseFloat(req.query.b)

            const result = await service.sub(a, b)

            res.send(result.toString())
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    },

    async mul(req, res) {
        try {
            if (isNaN(req.query.a) || isNaN(req.query.b)) {
                throw new Error('Invalid numbers: ' + JSON.stringify(req.query))
            }

            const a = parseFloat(req.query.a)
            const b = parseFloat(req.query.b)

            const result = await service.mul(a, b)

            res.send(result.toString())
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    },

    async div(req, res) {
        try {
            if (isNaN(req.query.a) || isNaN(req.query.b)) {
                throw new Error('Invalid numbers: ' + JSON.stringify(req.query))
            }

            const a = parseFloat(req.query.a)
            const b = parseFloat(req.query.b)

            const result = await service.div(a, b)

            res.send(result.toString())
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}
