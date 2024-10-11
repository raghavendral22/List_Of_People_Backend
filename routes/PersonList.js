const {response} =require("express");
const ex=require("express");
const mongodb=require('mongodb')
const {route} =require("express/lib/application");
const Per=require("../models/person");
const router=ex.Router();




router.get("/",async(req,res)=>{
   try{
    const P=await Per.find()
    res.json(P)
   }catch(err){
    res.json(err)
   }
});

router.get("/:personId",async(req,res)=>{

    const perso=req.params.personId

    try{
        const c=await Per.findById(perso);
        res.json(c);
    }catch(error){
        res.json(error);
    }

})

router.post("/",async(req,res)=>{

    const pe=await Per.create(req.body)
    res.send(pe);
}) 

router.delete("/:personId", async(req,res)=>{
    console.log(req.params.personId)
    const result=await Per.deleteOne({_id:new mongodb.ObjectId(req.params.personId)})
    res.send(result)
})

router.put("/:personId",async (req,res)=>{
    const personId=req.params.personId
    try{
       const pers= await Per.updateOne({
            "_id":personId
        },
    req.body)
    res.json(pers)
    }catch(error){
        res.json(error);
    }
})

module.exports=router;