const jsonwebtoken = require("jsonwebtoken");


const middleware = function(req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jsonwebtoken.verify(token, "functionup-thorium");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    next()

}

module.exports.middleware= middleware

