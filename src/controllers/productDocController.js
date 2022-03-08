const ProductDocumentModel= require("../models/productDocumentModel")


const createProduct= async function (req, res) {
    let data= req.body
    let productData= await ProductDocumentModel.create(data)
    res.send({msg: productData})
}


module.exports.createProduct= createProduct