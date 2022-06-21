const express = require('express');
const Product=require("../modles/productmodel")

const productrouter = express.Router();


productrouter.get('/',async(req, res, next)=>{
    const products=await Product.find();
    res.send(products)
});


productrouter.get("/slug/:slug",async(req,res)=>{
    
    const product=await Product.findOne({slug : req.params.slug});
    
    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({"message":"product not found"})
    }
});


module.exports=productrouter;