const express=require('express');
const router = require("./src/routes/api");
const app=new express();
const mongoose=require("mongoose");
const bodyParser = require('body-parser')


//Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')


//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(bodyParser.json())


//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
require('dotenv').config();
app.use(limiter)

// connect tp DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("DB connected")
  },(err)=>{
    console.log(err)
  });


// Defined route
app.use("/api/v1",router);



//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({message:"Invalid URL",data:"Not found"})
})

module.exports=app;


