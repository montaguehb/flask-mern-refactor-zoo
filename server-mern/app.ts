const express = require("express");
const app = express();

//create 4 routes
// "/" the default route which is just an h1 element with the text zoo app
app.get("/", (req, res) => {
  res.send("<h1>Zoo app</h1>");
});

// "/animal/int:id" returns an unordered list containg the animal's information for
// the animal, who's id matches the url.
app.get("/animal/:id", (req, res) => {
  res.send(`
  <li>
    <ul>ID: {animal.id}</ul>
    <ul>Name: {animal.name}</ul>
    <ul>Species: {animal.species}</ul>
    <ul>Zookeeper: {animal.zookeeper.name}</ul>
    <ul>Enclosure: {animal.enclosure.environment}</ul>
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