const mongoose = require("./connection");
const seeds = require("./seedData");
const Gif = require("./models/gif");

mongoose.Promise = Promise;

Gif.remove({}).then(_ => {
  console.log("Dropped the DB");
  Gif.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries);
    mongoose.connection.close();
  });
});
