import express from "express";
import FileHandler from './file-handler.js';

const router = express.Router();
const fh = new FileHandler();

router.use(/\/$/, async (req, res) => {
    let content = await fh.read("public/store/help.html");

    res.send(content);
});

router.route("/rest/:content?")
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

router.get("/read", async (req, res) => {
    let content = await fh.read('store.dat');

    res.send(content);
});

router.get("/write/:content?", async (req, res) => {
    try {
        let content = req.params.content;

        if (!content) {
            throw new Error("Missing parameter");
        }

        await fh.write('store.dat', content);

        res.send('Store updated');
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

export default router;