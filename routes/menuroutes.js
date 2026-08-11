const express=require('express')
const MenuItem=require('../models/Menuitem')
const Person = require('../models/person')
const router=express.Router()



router.post('/', async (req,res)=>{
    try{
        const item=req.body
        const newitem=new MenuItem(item)
        const response =await newitem.save()
        console.log("item saved")
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"internal server error"})
    }

})

router.get('/',async (req,res)=>{
  try
  {  const data=await MenuItem.find()
    res.status(200).json(data)
    console.log(data)
}catch(error){
    console.log(error)
    res.status(500).json({message:"Internal server error"})
}
})

router.get('/:taste',async (req,res)=>{
    try{
        const taste=req.params.taste
        const response=await MenuItem.find({taste:taste});
        res.status(200).json(response)
    }catch(error){
        console.log(error)
        res.status(500).json({message:"not found"})
    }
})
router.put('/:id',async (req,res)=>{
  
  try{  const menuid=req.params.id
    const updatemenu=req.body
    const response=await MenuItem.findByIdAndUpdate(menuid,updatemenu,{
            new:true,
            runValidators:true
        })
        console.log("updated record")
        res.status(200).json(response)

    }catch(error){
          console.log(error)
          res.status(500).json({msg:"internal server error"})
        }
})
router.delete('/:id',async (req,res)=>{
    try{
       const menuid=req.params.id
       const response=await MenuItem.findByIdAndDelete(menuid)
       console.log("deleted")
       res.status(200).json({msg:"deleted sucessfully"})

    }catch(error){
        console.log(error)
        res.status(500).json({msg:"internal error"})
    }
})










 

module.exports=router