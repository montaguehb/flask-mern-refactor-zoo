const { MongoClient } = require("mongodb");

let connection;
let db;

beforeAll(async () => {
  connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = await connection.db(globalThis.__MONGO_DB_NAME__);
});
