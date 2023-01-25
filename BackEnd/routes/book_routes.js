const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book_controller")
const Book = require("../model/model_book");

router.get("/", bookController.getAllBooks);
router.post("/",bookController.addBook)


module.exports = router;

