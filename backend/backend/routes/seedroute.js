const express = require('express');
const Product = require('../modles/productmodel')
const Category=require("../modles/categorymodle")
const Slider=require("../modles/slidermodel")
const User=require("../modles/usermodal")
const {data}=require("../data");



const seedRouter=express.Router();

seedRouter.get("/",async(req, res, next)=>{
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    
    await Category.remove({});
    const createdCategory = await Category.insertMany(data.category);
    

    await Slider.remove({});
    const createdSlider = await Slider.insertMany(data.sliderItems);
    

    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    
    res.send({ createdProducts, createdCategory,createdSlider });

});

module.exports=seedRouter;