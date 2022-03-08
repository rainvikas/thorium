const Midware= function(req,res,next) {
    let freeUser=req.headers["isfreeappuser"]
    if (freeUser!=undefined) {
        next();
    } else{
    res.send({msg:"the request is missing a mandatory header"})

    }


}
module.exports.Midware=Midware