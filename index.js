import express from "express";
import FileHandler from './file-handler.js';
import store from "./store.js";
import math from "./math.js";

const app = express();
const fh = new FileHandler();

app.use(express.json());

app.use(/\/$/, async (req, res) => {
    let content = await fh.read("public/help.html");

    res.send(content);
});

app.use("/store", store);
app.use("/math", math);

app.listen(8080, () => {
    console.log("API started");
});