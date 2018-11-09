const mongoose = require("mongoose");

const GifSchema = new mongoose.Schema({
  name: String,
  url: String
});

// const Gif = mongoose.model("Gif", GifSchema);

module.exports = mongoose.model("Gif", GifSchema);
