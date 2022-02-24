const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})

let players = [
    {

        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": ["swimming"],
        "bookings": [



        ]

    },

    {

        "name": "gopal",

        "dob": "1/09/1995",

        "gender": "male",

        "city": "delhi",

        "sports": [

            "soccer"

        ],

        "bookings": [



        ]

    },

    {

        "name": "lokesh",

        "dob": "1/1/1990",

        "gender": "male",

        "city": "mumbai",

        "sports": [

            "soccer"

        ],

        "bookings": [



        ]

    }
]

router.post("/players", function (req, res) {
    let newPlayers = req.body
    let newPlayersName = req.body.name
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == newPlayersName) {
            return res.send("player already exist")
        }
    }
    players.push(newPlayers)
    res.send(players)
});
router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
    let name = req.params.playerName
    isPlayerPresent = false;
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            isPlayerPresent = true
        }
    }
    if (!isPlayerPresent) {
       return res.send("player not present")
    }
    let booking = req.body
    let bookingId = req.params.bookingId
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            for (let j = 0; j < players[i].bookings.length; j++) {
                if (players[i].bookings[j].bookingNumber == bookingId) {
                    return res.send("booking with this id is already done")
                }
            }
            players[i].bookings.push(booking)
        }
    }
    return res.send(players)
});

module.exports = router;


