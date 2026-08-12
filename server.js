const express=require('express')
const app=express()
const db = require('./db')
const bodyParser=require('body-parser')
const Person=require('./models/person')
const MenuItem=require('./models/MenuItem')
require('dotenv').config();

const PORT=process.env.PORT||3000;


app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("welcome to hotel")
})


//import 
const personRoutes=require('./routes/personroutes')
const menuroutes=require('./routes/menuroutes')
app.use('/person',personRoutes)
app.use('/menu',menuroutes)



app.listen(PORT,()=>{console.log("server started")} )
