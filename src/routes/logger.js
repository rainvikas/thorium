let url = 'https://www.google.com'

function welcome(myMessage) {
    console.log(myMessage)
}

function print(message) {
    console.log(message)
}

module.exports.endpoint = url

module.exports.printMessage = print
module.exports.welcomeMessage = welcome