const mongoose = require('mongoose');

const sliderSchema=new mongoose.Schema({
    image: { type: String, required: true },
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("sliders",sliderSchema)