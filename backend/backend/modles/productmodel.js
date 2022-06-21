const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    countInStock: { type: Number, required: true },
    price: { type: Number, required: true },
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model('products',productSchema)