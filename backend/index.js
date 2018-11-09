const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const gifsController = require("./controllers/gifs");

app.use(parser.urlencoded({ extended: true }));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use("/gifs/", gifsController);

app.listen(8000, () => console.log("on port 8000..."));
