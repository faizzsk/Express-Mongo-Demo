const express=require("express");
const router=express.Router();
const Alien=require('../Model/alien')

router.get("/",async(req,res)=>{
try{
const aliens=await Alien.find()
console.log(aliens)
res.json(aliens)
}catch(err){
    res.send(err)
}
})
router.post("/",async(req,res)=>{
    const alien=new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try{
        const a1=await Alien.save()
        res.json(a1)
    }catch(err){
        console.log(err);
    }

})

module.exports=router;