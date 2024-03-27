const express=require('express');
const URL=require('../models/url');
const router=express.Router();

router.get("/",async(req,res)=>{
    const allURLS=await URL.find({});

    res.render("home",{
        allurls:allURLS
    });
})

module.exports=router;