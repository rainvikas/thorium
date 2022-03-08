const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const orderDocSchema = new mongoose.Schema({
    userId: {
    type: ObjectId,
    ref: "UserDoc"
    },
productId: {
    type: ObjectId,
    ref: "ProductDoc"
},
amount: Number,
isFreeAppUser: Boolean, 
date: Date
}, {timestamps:true});


module.exports=mongoose.model('OrderDoc', orderDocSchema)