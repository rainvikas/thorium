const { count } = require("console");
const newAuthorModel = require("../models/newAuthorModel")

// Write a POST api that creates an author from the details in request body

const createNewAuthor = async function (req, res) {
    let author = req.body
    let authorData = await newAuthorModel.create(author)
    res.send({ data: authorData })
}

module.exports.createNewAuthor = createNewAuthor