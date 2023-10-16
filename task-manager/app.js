const express = require("express");
const app = express();
const routes = require("./routes/tasks");
const connectDb = require("./db/connect");

app.use(express.json()); //to get data in req body

//routes

app.use("/api/v1/tasks", routes);

// connection function

const start = async () => {
  try {
    await connectDb();
  } catch (error) {
    console.log(error);
  }
};

start();

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
