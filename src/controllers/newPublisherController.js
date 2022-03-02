const { count } = require("console");
const newPublisherModel = require("../models/newPublisherModel")

// Write a POST api that creates a publisher from the details in the request body

const createNewPublisher = async function (req, res) {
    let publisher = req.body
    let publisherData = await newPublisherModel.create(publisher)
    res.send({ data: publisherData })
}

module.exports.createNewPublisher = createNewPublisher