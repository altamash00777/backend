const express=require('express')

const router=express.Router() 
const Person=require('../models/person')


//post
router.post('/',async (req,res)=>{

    try{
        const data=req.body
        const newPerson=new Person(data)
        const response=await newPerson.save()
        console.log('data saved')
        res.status(200).json(response)
   }catch(err){
console.log(err)
res.status(500).json({error:"internal server error"})
    }
})
//get
router.get('/',async (req,res)=>{
    try{
        const data=await Person.find()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({msg:"server error"})
        console.log(err)
    }
})


//get with worktype
router.get('/:workType',async (req,res)=>{
    try{
     const workType=req.params.workType;
     if(workType=='chef'|| workType=='manager' || workType=='waiter'){
        const response=await Person.find({work:workType});
        console.log("fetched")
        res.status(200).json(response)
     }else{
        res.status(404).json({error:"invalid work"})
     }
    }catch(error){
        console.log(error)
        res.status(500).json({error:'internal server error'})
    }
})

router.put('/:id',async (req,res)=>{

    try
{    const personid=req.params.id
    const updateddata=req.body
    const response=await Person.findByIdAndUpdate(personid,updateddata,{
        new:true,
        runValidators:true
    })
    console.log("updated")
    res.status(200).json(response)
}catch(error){
    console.log(error)
}

})

router.delete('/:id',async (req,res)=>{
   try{
         const personid=req.params.id;
         const response=await Person.findByIdAndDelete(personid)
         res.status(200).json({msg:"deleted person sucess"})
   
        }catch(error){
            console.log(error)
          res.status(500).json({msg:"server error"})
   }
})





module.exports=router;