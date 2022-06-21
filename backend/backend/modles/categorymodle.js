const mongoose = require('mongoose');

const categorySchema=new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    image: { type: String, required: true },
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("categories",categorySchema)