const express = require("express")
const router = express.Router()
const homeController = require("./controllers/homeController")
const bookController = require("./controllers/bookController")

router.get("/", homeController.getHome)
router.get("/books", bookController.getBook)
router.post("/books", bookController.postBook)
router.get("/book-list", bookController.getBookList)
router.get('/delete-book',bookController.deleteBook)
router.get('/edit-book',bookController.editBook)

module.exports = router;