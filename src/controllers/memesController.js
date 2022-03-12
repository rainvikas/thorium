let axios=require('axios')


let memesCreator = async function (req, res) {
    try {
        let memeId=req.query.template_id
        let text0=req.query.text0
        let text1=req.query.text1

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
        }

        let result = await axios(options)
        // console.log(result.data)
        res.status(201).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.memesCreator=memesCreator