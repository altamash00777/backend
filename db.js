const mongoose=require('mongoose')
require('dotenv').config()

// url of mongodb
// const mongoURL='mongodb://127.0.0.1:27017/hotels'
const mongoURL=process.env.MONGODB_URL;

// setup mongodb connection
mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})

const db=mongoose.connection


// event listener
db.on('connected',()=>{
    console.log("connected to mongodb server")
})
db.on('error',()=>{
    console.log("mongodb error")
})
db.on('disconnected',()=>{
    console.log("mongodb disconnected")
})
module.exports=db