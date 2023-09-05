const { faker } = require("@faker-js/faker")
const mongoose = require("mongoose");
const model = require("../model")

mongoose.connect("mongodb://127.0.0.1:3050");

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
