const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://praduman:0294%40prad@nodeexpressproject.i2gyz6z.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to the db"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
