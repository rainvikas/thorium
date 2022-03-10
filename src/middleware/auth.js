const jsonwebtoken = require("jsonwebtoken");


const middleware = function(req, res, next) { 
    try {
    let token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
    let decodedToken = jsonwebtoken.verify(token, "functionup-thorium");
    if (!decodedToken) return res.status(401).send({ status: false, msg: "token is invalid" });
    }
    catch (error) {
        console.log("this is the error:", error.message)
        res.status(500)({ msg: "server error", err: error })
      }
    next()

}

const Authorization = function(req,res,next) {
    try {
    let token =req.headers["x-auth-token"]
    let decodedToken = jsonwebtoken.verify(token, "functionup-thorium");
    let userToBeModified= req.params.userId
    if(!userToBeModified) {
        res.status(400).send({msg: "BAD REQUEST"})
    }
    let userLoggedIn= decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.status(403).send("msg:no such user exist")
}
catch (error) {
    console.log("this is the error:", error.message)
    res.status(500)({ msg: "server error", err: error })
  }
    next()
}



module.exports.middleware = middleware
module.exports.Authorization = Authorization