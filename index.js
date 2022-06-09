import express from 'express'
import fh from './src/infras/file-handler.js'
import store from './src/routers/store.router.js'
import math from './src/routers/math.router.js'

const app = express()

app.use(express.json())

app.use(/\/$/, async (req, res) => {
    let content = await fh.read('public/help.html')

    res.send(content)
})

app.use('/store', store)
app.use('/math', math)

app.listen(3000, () => {
    console.log('API started')
})