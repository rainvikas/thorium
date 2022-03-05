const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment =require('moment')
const ip = require('ip')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://rahat6713:1819rahat@cluster0.iee0y.mongodb.net/yada?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


// Write a middleware that logs (console.log) some data everytime any API is hit
// Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).

const midGlb = function(req, res, next) {
    const today =moment()
    let y = today.format()
    let Ip = ip.address() 
    console.log( y,"," ,Ip,",",req.originalUrl)
    next()
}
app.use(midGlb)

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
