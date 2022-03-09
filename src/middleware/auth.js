const jsonwebtoken = require("jsonwebtoken");


const middleware = function(req, res, next) { 
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jsonwebtoken.verify(token, "functionup-thorium");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    next()

}

const Authorization = function(req,res,next) {
    let token =req.headers["x-auth-token"]
    let decodedToken = jsonwebtoken.verify(token, "functionup-thorium");
    let userToBeModified= req.params.userId
    let userLoggedIn= decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send("msg:no such user exist")
    next()
}


module.exports.middleware = middleware
module.exports.Authorization = Authorization