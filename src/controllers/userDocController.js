const UserDocumentModel= require("../models/userDocumentModel")


const createUserDoc= async function (req, res) {
    let data= req.body

    let userData= await UserDocumentModel.create(data)
    res.send({msg: userData})
}


module.exports.createUserDoc= createUserDoc