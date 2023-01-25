const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book_routes")
const app = express();


// middleware 
app.use(express.json());
app.use("/books",router)

mongoose.set('strictQuery', false);


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