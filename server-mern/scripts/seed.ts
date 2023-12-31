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


let enclosures = [];

const createZookeepers = async () => {
  const deleted = await model.zookeeper.deleteMany({});
  let zookeepers = [];
  if (deleted) {
    let i = 0;
    while (i < 10) {
      const name = await faker.person.firstName();
      if (!zookeepers.find((zookeeper) => zookeeper._id === name)) {
        const newZookeeper = new model.zookeeper({
          _id: name,
          name: name,
          birthday: faker.date.birthdate(),
        });
        zookeepers.push(newZookeeper);
        newZookeeper.save();
        i++;
      }
    }
  }
  return zookeepers;
};

const createEnclosure = async () => {
  const deleted = await model.enclosure.deleteMany({});
  if (deleted) {
    environments.forEach((environment) => {
      const newEnclosure = new model.enclosure({
        _id: environment,
        environment: environment,
        open_to_visitors: true,
      });
      enclosures.push(newEnclosure);
      console.log(enclosures)
      newEnclosure.save();
    });
  }
};

const createAnimals = async (zookeepers, enclosures) => {
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
          zookeeper_id:
            zookeepers[Math.floor(Math.random() * zookeepers.length)],
          enclosure_id:
            enclosures[Math.floor(Math.random() * enclosures.length)],
        });
        newAnimal.save();
        i++;
      }
    }
  }
};

const main = async () => {

  let zookeepers = await createZookeepers();
  let enclosures = await createEnclosure();
  createAnimals(zookeepers, enclosures);

  setInterval(async () => {
    const animals = await model.animal.countDocuments({});
    if (animals === 5) {
      mongoose.connection.close();
      process.exit();
    }
  }, 5000);
}

main();