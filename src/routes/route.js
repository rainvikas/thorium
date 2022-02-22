const myObj = require('../validator/formatter');
let obj = require('./logger')
const myNewObj = require('../util/helper')
const lod = require('lodash')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
    obj.welcomeMessage('Welcome to my application. I am Vikas Yadav and a part of FunctionUp thorium cohort')
    console.log(obj.endpoint)
    myObj.myTrim()
    console.log(myNewObj.varNew);
    myNewObj.dateInfo();
    myNewObj.month();
    myNewObj.batchInfo();

    res.send('My first ever api of the week!')
});

router.get('/hello', function (req, res) {
    console.log(lod.chunk(["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],3));
    console.log(lod.tail([1,3,5,7,9,11,13,15,17],9));
    console.log(lod.union([1,2],[3,4,2],[5,6,7,1],[8,9,11],[4,12,13]));
    console.log(lod.fromPairs([["Vikas",1],["Yadav",2]]));
    res.send('Hello there!')
});

module.exports = router;