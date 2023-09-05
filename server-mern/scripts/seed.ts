import { symlinkSync } from "fs";

const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");
const model = require("../model");
require("dotenv").config();

if (!process.env.MONGODB_URI) {
  console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const environments = [
  "Desert",
  "Pond",
  "Ocean",
  "Field",
  "Trees",
  "Cave",
  "Cage",
];

let names = [];

const createZookeepers = async () => {
  const deleted = model.zookeeper.deleteMany({});
  if (deleted) {
    let i = 0;
    while (i < 10) {
      const name = await faker.person.firstName();
      if (!names.find((current_name) => current_name === name)) {
        names.push(name);
        const newZookeeper = new model.zookeeper({
          _id: name,
          name: name,
          birthday: faker.date.birthdate(),
        });
        newZookeeper.save();
        i++;
      }
    }
  }
};

const createEnclosure = async () => {
  const deleted = await model.enclosure.deleteMany({});

  if (deleted) {
    environments.forEach((environment, i) => {
      const newEnclosure = new model.enclosure({
        _id: environment,
        environment: environment,
        open_to_visitors: true,
      });
      newEnclosure.save();
    });
  }
};

const createAnimals = async () => {
  const deleted = await model.animal.deleteMany({});

  if (deleted) {
    let animalTypes = [];
    let i = 0;
    while (i < 5) {
      const name = faker.animal.type();
      if (!animalTypes.find((type) => type === name)) {
        animalTypes.push(name);
        const newAnimal = new model.animal({
          _id: name,
          name: name,
          zookeeper_id: names[Math.floor(Math.random() * names.length)],
          enclosure_id:
            environments[Math.floor(Math.random() * environments.length)],
        });
        newAnimal.save();
        i++;
      }
    }
  }
};

createZookeepers();
createEnclosure();
createAnimals();

setInterval(async () => {
  const animals = await model.animal.countDocuments({});
  if (animals === 5) {
    mongoose.connection.close();
    process.exit();
  }
}, 5000);
