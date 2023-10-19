// to put our data in mongodb database

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
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
