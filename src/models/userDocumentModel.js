const mongoose = require('mongoose');

const userDocSchema = new mongoose.Schema({
    name: String,
	balance: {
        type: Number,
        Default:100

    }, 
	address: String,
	age: Number,
 	gender: {
        type: String,
        enum: ["male","female","others"]
     },
	isFreeAppUser: {
        type: Boolean,
        Default: false
    }
}, {timestamps: true});



module.exports=mongoose.model('userDoc', userDocSchema)