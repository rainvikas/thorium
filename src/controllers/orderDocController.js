const OrderDocumentModel = require("../models/orderDocumentModel")
const UserDocumentModel = require("../models/userDocumentModel")
const ProductDocumentModel = require("../models/productDocumentModel")
const userModel = require("../models/userModel")


const createOrder = async function (req, res) {
    let data = req.body
    let userid = data.userId
    let productid = data.productId
    let freeAppUser = req.headers.isFreeAppUser
    if (!userid) {
        res.send("userId is requird")
    }
    if (!productid) {
        res.send("productId is required")
    }
    let userIsValid = await UserDocumentModel.findById(userid)
    if (!userIsValid) {
        res.send("userId not present")
    }
    let productIsValid = await ProductDocumentModel.findById(productid)
    if (!productIsValid) {
        res.send("productId is not present")
    }
    let ProductDetail = await ProductDocumentModel.findById(productid)
    let priceValue = ProductDetail.price

    let UserDetails = await UserDocumentModel.findById(userid)
    let userBalance = UserDetails.balance

    if (freeAppUser === "false") {
        if (userBalance > priceValue) {
            let updatedBalance = await userModel.findByIdAndUpdate({ _id: userid }, { $inc: { balance: -priceValue } }, { new: true })

            data.amount = priceValue
            data.isFreeAppUser = false
            

            let orderDetail = await OrderDocumentModel.create(data)
            res.send({ order: orderDetail })
        } else {
            res.send({ error: "inSufficient Balance" })
        }


    } else {
        data.amount = 0;
        data.isFreeAppUser = true
        let OrderDetail = await OrderDocumentModel.create(data)
        res.send({ order: OrderDetail });
    }

}
module.exports.createOrder = createOrder