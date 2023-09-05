const express = require("express");
const app = express();
const mongoose = require("mongoose")
const model = require("./model")
require("dotenv").config();

if (!process.env.MONGODB_URI) {
  console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

//create 4 routes
// "/" the default route which is just an h1 element with the text zoo app
app.get("/", (req, res) => {
  res.send("<h1>Zoo app</h1>");
});

// "/animal/int:id" returns an unordered list containg the animal's information for
// the animal, who's id matches the url.
app.get("/animal/:id", async (req, res) => {
  const animal = await model.animal.findOne({_id: req.params.id}).exec()
  res.send(`
  <li>
    <ul>ID: ${animal.id}</ul>
    <ul>Name: ${animal.name}</ul>
    <ul>Species: ${animal.species}</ul>
    <ul>Zookeeper: ${animal.zookeeper}</ul>
    <ul>Enclosure: ${animal.enclosure}</ul>
  </li>
  `);
});

// "/zookeeper/int:id" returns an unordered list containg the zookeeper's information for
// the zookeeper, who's id matches the url.
app.get("/", (req, res) => {
  res.send("<h1>Zoo app</h1>");
});

// "/enclosure/int:id" returns an unordered list containg the enclosure's information for
// the enclosure, who's id matches the url.
app.get("/", (req, res) => {
  res.send("<h1>Zoo app</h1>");
});

module.exports = app;
export {};