const { count } = require("console");
const newAuthorModel = require("../models/newAuthorModel");
const newBookModel = require("../models/newBookModel");
const newPublisherModel = require("../models/newPublisherModel");

// Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 

// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

const createNewBook = async function (req, res) {
    let book = req.body

    let authorId = req.body.author
    let publisherId = req.body.publisher

    if (!authorId) {
        res.send('author is required')
    }
    if (!publisherId) {
        res.send('publisher is required')
    }

    let authorDetail = await newAuthorModel.findById(authorId)
    let publisherDetail = await newPublisherModel.findById(publisherId)
    if (authorDetail && publisherDetail) {
        let newBookData = await newBookModel.create(book)
        res.send({ data: newBookData })
    } else if (!authorDetail) {
        res.send('author not present')
    } else {
        res.send('publisher not present')
    }
}

// Write a GET api that fetches all the books along with their author details (you have to populate for this) 
// as well the publisher details (you have to populate for this) 

const getAllBookAuthorPublisher = async function(req, res) {
    let booksAuthorPublisher= await newBookModel.find().populate('author publisher')
    res.send({data: booksAuthorPublisher})
}


module.exports.createNewBook = createNewBook
module.exports.getAllBookAuthorPublisher= getAllBookAuthorPublisher