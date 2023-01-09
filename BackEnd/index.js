const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://Rishi:RPKIvd6QltVc7pl4@cluster0.gj6qy9r.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
