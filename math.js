import express from "express";

const router = express.Router();

router.get("/sum", (req, res) => {
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