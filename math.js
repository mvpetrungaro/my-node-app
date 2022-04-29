import express from "express";
import FileHandler from "./file-handler.js";

const router = express.Router();
const fh = new FileHandler();

router.use(/\/$/, async (req, res) => {
    let content = await fh.read("public/math/help.html");

    res.send(content);
});

router.get("/add", (req, res) => {
    try {
        if (isNaN(req.query.a) || isNaN(req.query.b)) {
            throw new Error("Invalid numbers: " + JSON.stringify(req.query));
        }

        res.send((parseFloat(req.query.a) + parseFloat(req.query.b)).toString());
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.get("/sub", (req, res) => {
    try {
        if (isNaN(req.query.a) || isNaN(req.query.b)) {
            throw new Error("Invalid numbers: " + JSON.stringify(req.query));
        }

        res.send((parseFloat(req.query.a) - parseFloat(req.query.b)).toString());
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.get("/mul", (req, res) => {
    try {
        if (isNaN(req.query.a) || isNaN(req.query.b)) {
            throw new Error("Invalid numbers: " + JSON.stringify(req.query));
        }

        res.send((parseFloat(req.query.a) * parseFloat(req.query.b)).toString());
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.get("/div", (req, res) => {
    try {
        if (isNaN(req.query.a) || isNaN(req.query.b)) {
            throw new Error("Invalid numbers: " + JSON.stringify(req.query));
        }

        res.send((parseFloat(req.query.a) / parseFloat(req.query.b)).toString());
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

export default router;