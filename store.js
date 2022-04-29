import express from "express";
import FileHandler from './file-handler.js';

const router = express.Router();
const fh = new FileHandler();

router.route("/:content?")
.get(async (req, res) => {
    let content = await fh.read('store.dat');

    res.send(content);
})
.post(async (req, res) => {
    let content = req.params.content;

    await fh.write('store.dat', content);

    res.send('Store updated');
})
.all((req, res) => {
    res.send('Nothing here...');
});

export default router;