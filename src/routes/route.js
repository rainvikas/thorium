const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midd = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",midd.middleware,midd.Authorization,userController.getUserData)

router.put("/users/:userId",midd.middleware,midd.Authorization,userController.updateUser)
router.delete('/users/:userId',midd.middleware,userController.deletedUser)

router.post("/users/:userId/posts",midd.middleware,userController.postMessage)

module.exports = router;


