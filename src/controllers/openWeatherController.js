let axios = require("axios")


let getWeather = async function (req, res) {
    try {
        let q = req.query.q
        // console.log(`query params are: ${pin} ${date}`)
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=52d6a72105e70f26ba4d4184bb9206f8`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWeatherTemp = async function (req, res) {
    try {
        let q = req.query.q
        // console.log(`query params are: ${pin} ${date}`)
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=52d6a72105e70f26ba4d4184bb9206f8`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ temperature: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getSortedCities = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let array = []
        for (let item in cities ) {
            let obj = { city: cities[item] }
            let options = await axios.get(`HTTP://api.openweathermap.org/data/2.5/weather?q=${cities[item]}&appid=758942a516f24150e318b3362a64d75c`)
            obj.temp = options.data.main.temp
            array.push(obj)

        }
        let sorted = array.sort((a, b) => a.temp - b.temp )
        // console.log(sorted)

        res.status(201).send({ data: sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather
module.exports.getWeatherTemp = getWeatherTemp
module.exports.getSortedCities = getSortedCities