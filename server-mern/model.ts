import mongoose from "mongoose";

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
  animal_id: Number
});

const enclosureSchema = new mongoose.Schema({
    _id: Number,
    environment: String,
    open_to_visitors: Boolean,
})