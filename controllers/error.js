const path =require("path");             //path module core node js module

exports.get404=(req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,"../", "views","404.html"));
}