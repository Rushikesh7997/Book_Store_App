const express = require("express");
const mongoose = require("mongoose");

const app = express();


// middleware 

app.use("/",(req,res,next)=>{
  res.send("The severs is started")
})

mongoose
  .connect(
    "mongodb+srv://admin:CeMvZP6DGipop03d@cluster0.vvqt6br.mongodb.net/book_store?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));




// CeMvZP6DGipop03d