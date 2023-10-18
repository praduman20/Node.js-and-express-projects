const express = require("express");
const app = express();
const notFound = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const connectDb = require("./db/connect");
const router = require("./routes/products");
require("dotenv").config();
require("express-async-errors");

// async errors

// middleware

app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", router);

// products route

app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`The server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
