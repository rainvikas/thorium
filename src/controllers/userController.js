const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try {
    let data = req.body;
    if (Object.keys(data).length == 0) {
      res.status(400).send({ msg: "BAD REQUEST" })
    }
    else {
      let savedData = await userModel.create(data);
      res.status(201).send({ Data: savedData })
    }
  }

  catch (error) {
    console.log("this is the error:", error.message)
    res.status(500)({ msg: "server error", err: error })

  }
};


const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
  if (!(userName && password)) {
    res.status(400).send({msg: "BAD REQUEST"})
  } else {
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(403).send({ msg: "username or the password is not corerct"});
  
    // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret
    // The same secret will be used to decode tokens
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, data: token });

  }
  }
  catch (error) {
    console.log("this is the error:", error.message)
    res.status(500)({ msg: "server error", err: error })
  }
};

const getUserData = async function (req, res) {

try {
  let userId = req.params.userId;
  if (!userId) {
    res.status(400).send({msg: "BAD REQUEST"})
  } else {
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
    return  res.status(404).send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  }
}
catch (error) {
  console.log("this is the error:", error.message)
  res.status(500)({ msg: "server error", err: error })
}
};

const updateUser = async function (req, res) {
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
try {
  let userId = req.params.userId;
  if(!userId) {
    res.status(400).send({msg: "BAD REQUEST"})
  }
  else {
    let user = await userModel.findById(userId);
    if (!user) 
      return res.status(404).send("No such user exists");

      let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.status(201).send({ status: updatedUser, data: updatedUser });
  }
}
catch (error) {
  console.log("this is the error:", error.message)
  res.status(500)({ msg: "server error", err: error })
}
};

const deletedUser = async function (req, res) {
try {
  let userId = req.params.userId;
  if (!userId) {
    res.status(400).send({msg: "BAD REQUEST"})
  }
  let user = await userModel.findById(userId);

  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let deletedUsers = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
  res.status(201).send({ status: "deleted", data: deletedUsers });
}
catch (error) {
  console.log("this is the error:", error.message)
  res.status(500)({ msg: "server error", err: error })
}

};

const postMessage = async function (req, res) {
try {
  let message = req.body.message
  if (!message) {
    res.status(400).send({msg: "BAD REQUEST"})
  }

  let user = await userModel.findById(req.params.userId)
  if (!user) return res.status(404).send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.status(201).send({ status: true, data: updatedUser })
}
catch (error) {
  console.log("this is the error:", error.message)
  res.status(500)({ msg: "server error", err: error })
}
};



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletedUser = deletedUser;
module.exports.postMessage = postMessage;

