const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Gif = require("../db/models/gif");

router.get("/", (req, res) => {
  Gif.find({}).then(gifs => res.json(gifs));
});

router.get("/:name", (req, res) => {
  Gif.findOne({ name: req.params.name }).then(names => res.json(names));
});

router.post("/", (req, res) => {
  Gif.create(req.body).then(gifs => res.json(gifs));
});

router.put("/:name", (req, res) => {
  Gif.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true
  }).then(gif => res.json(gif));
});

router.delete("/:name", (req, res) => {
  Gif.findOneAndRemove({ name: req.params.name }).then(deltitle =>
    res.json(deltitle)
  );
});

module.exports = router;
