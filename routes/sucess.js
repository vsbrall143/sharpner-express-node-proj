const path =require("path");             //path module core node js module
const express =require('express');

const router= express.Router();

// path is /admin/add-product => GET  but admin is added as filter in app.js file 
router.get("/sucess", (req,res,next) => {
 
    res.sendFile(path.join(__dirname,"../","views","sucess.html"));
 
});

// path is /admin/add-product => POST  but admin is added as filter in app.js file
router.post("/sucess", (req,res,next) => {
  console.log(req.body);
});

module.exports=router;