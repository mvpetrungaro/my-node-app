import express from "express";
import store from "./store.js";
import math from "./math.js";

const app = express();

app.use(express.json());

app.use("/store", store);
app.use("/math", math);

app.listen(8080, () => {
    console.log("API started");
});