const mongoose = require("mongoose")

const animalSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  species: String,
  zookeeper_id: Number,
  enclosure_id: Number
});

const zookeeperSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  birthday: Date,
});

const enclosureSchema = new mongoose.Schema({
    _id: Number,
    environment: String,
    open_to_visitors: Boolean,
})

const animal = mongoose.model("Animal", animalSchema);
const zookeeper = mongoose.model("zookeeper", zookeeperSchema);
const enclosure = mongoose.model("enclosure", enclosureSchema);

module.exports = {animal, zookeeper, enclosure};