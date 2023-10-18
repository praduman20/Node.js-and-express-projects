// to send all the data of products.json to our database we have this file populate.js

require("dotenv").config();

const connecDb = require("./db/connect");
const product = require("./models/product");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connecDb(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(jsonProducts);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
