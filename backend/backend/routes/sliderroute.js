const express = require('express')
const Slider=require("../modles/slidermodel");

const sliderrouter=express.Router();

sliderrouter.get("/",async(req,res,next)=>{
    const slider=await Slider.find();
    res.send(slider)
});


module.exports=sliderrouter
