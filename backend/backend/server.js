const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const {data}=require("./data");
const categoryroute = require('./routes/categoryroute');
const productrouter = require('./routes/productroute');
const seedRouter = require('./routes/seedroute');
const sliderrouter= require("./routes/sliderroute");
const userRouter = require('./routes/userroute');
const orderRouter =require("./routes/orderroute")
var cors = require('cors')

 


require("dotenv").config();


const app=express();
app.use(express.json());
const port =process.env.PORT || 5000;
app.use(cors({
  origin: 'https://localhost:3000/',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization'
}));
app.use(express.json())



app.get("/",(req,res)=>{
  res.json("API working")
})
app.use("/api/seed",seedRouter);
app.use("/api/products",productrouter)
app.use("/api/category",categoryroute)
app.use("/api/slider",sliderrouter)
app.use('/api/users/', userRouter);
app.use("/api/orders",orderRouter);



// deployment
// __dirname=path.resolve();
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname,"/frontend/build")));

//   app.get("*",(req,res) =>{
//     res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
//   })

// }
// else{
//   app.get("/",(req,res) => {
//     res.send("API is running...")
//   })
// }

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});











mongoose.connect("mongodb+srv://socialmedia:apintu705@cluster0.w47dk.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

