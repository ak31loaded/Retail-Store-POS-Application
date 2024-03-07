const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connectionObj.on("error", () => {
  console.log("Mongo DB Connection Failed");
});
