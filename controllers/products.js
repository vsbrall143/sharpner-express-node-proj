const path =require("path");             //path module core node js module
const Product=require("../models/product")

exports.getAddProduct=(req,res,next) => {
 
    res.sendFile(path.join(__dirname,"../","views","add-product.html"));
 
}

exports.postAddProduct = (req,res,next) => {
    const product= new Product(req.body.title)
    product.save();
    console.log(req.body);
 
    res.redirect("/");
}

exports.getProducts=(req,res,next) => {
    
    const products=Product.fetchAll();
    console.log(products);
    res.sendFile(path.join(__dirname,"../","views","shop.html"));
}


