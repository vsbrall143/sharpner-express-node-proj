const path =require("path");
const express =require('express');

const productsController=require("../controllers/products") // .. is used to go up one dir and then go to contorller folder and import product controller which provides functionality to send respose to the get request

const router= express.Router();

router.get("/", productsController.getProducts);     //passing reference to the function


module.exports=router;