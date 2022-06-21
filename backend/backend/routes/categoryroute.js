const express = require("express");
const Category=require("../modles/categorymodle")
const categoryroute=express.Router();


categoryroute.get("/",async(req,res,next)=>{
    const category=await Category.find();
    res.send(category);
});



module.exports=categoryroute