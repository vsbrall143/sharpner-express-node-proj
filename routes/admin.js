const path =require("path");             //path module core node js module
const express =require('express');

const productsController=require("../controllers/products") // .. is used to go up one dir and then go to contorller folder and import product controller which provides functionality to send respose to the get request

const router= express.Router();

// path is /admin/add-product => GET  but admin is added as filter in app.js file 
router.get("/add-product",productsController.getAddProduct);

// path is /admin/add-product => POST  but admin is added as filter in app.js file
router.post("/add-product",productsController.postAddProduct);

module.exports=router;