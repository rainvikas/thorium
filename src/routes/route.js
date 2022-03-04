const express = require('express');
const router = express.Router();

const newAuthorController = require("../controllers/newAuthorController")
const newBookController = require("../controllers/newBookController")
const newPublisherController = require("../controllers/newPublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", authorController.createAuthor)

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook)

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)



router.post("/createNewAuthor", newAuthorController.createNewAuthor)
router.post("/createNewPublisher", newPublisherController.createNewPublisher)
router.post("/createNewBook", newBookController.createNewBook)
router.get("/getAllBookAuthorPublisher",newBookController.getAllBookAuthorPublisher)

router.put("/Books",newBookController.books)

module.exports = router;