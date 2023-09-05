const mongoose = require("mongoose")

const animalSchema = new mongoose.Schema({
  _id: String,
  name: String,
  species: String,
  zookeeper_id: {type: mongoose.Schema.Types.ObjectId, ref: "Zookeeper"},
  enclosure_id: {type: mongoose.Schema.Types.ObjectId, ref: "Enclosure"},
});

const zookeeperSchema = new mongoose.Schema({
  _id: String,
  name: String,
  birthday: Date,
});

const enclosureSchema = new mongoose.Schema({
    _id: String,
    environment: String,
    open_to_visitors: Boolean,
})

const animal = mongoose.model("Animal", animalSchema);
const zookeeper = mongoose.model("Zookeeper", zookeeperSchema);
const enclosure = mongoose.model("Enclosure", enclosureSchema);

module.exports = {animal, zookeeper, enclosure};
export {};