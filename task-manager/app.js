const express = require("express");
const app = express();
const routes = require("./routes/tasks");
const connectDb = require("./db/connect");
// dotenv for secret strings
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errrorHandler");

//middleware
app.use(express.json()); //to get data in req body
app.use(express.static("./public"));

//routes

app.use("/api/v1/tasks", routes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

// connection function

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
