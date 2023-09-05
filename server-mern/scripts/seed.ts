const { faker } = require("@faker-js/faker")
const mongoose = require("mongoose");
const model = require("../model")
require('dotenv').config();

if (!process.env.MONGODB_URI) {
  console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const createZookeepers = () => {
  model.zookeeper.deleteMany({});
  for (let i = 0; i < 100; i++) {
    const new_zookeeper = new model.zookeeper({
      _id: i,
      name: faker.person.firstName(),
      birthday: faker.date.birthdate(),
    });
    new_zookeeper.save();
  }
};

createZookeepers();
