const express = require("express");
const router = express.Router()
const Book = require("../model/model_book")


router.get("/", async (req,res,next)=>{
    // this route will provide all of the books
    let books;
    try {
        books= await Book.find();

    }
    catch (err){
        console.log(err)
    }
    if(!books){
        return res.status(404).json({message:"no products found"})
    }
    return res.status(200).json({books});
})

module.exports = router;


// kill them with your success 
// bury them with your smile 

/*

apptitudde test





*/