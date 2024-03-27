const express=require('express');
const{handleCreateUrl,handleRedirect,handleAnalytics}=require('../controllers/url');
const router=express.Router();



router.post("/",handleCreateUrl);

router.get("/:shortID",handleRedirect);

router.get('/analytics/:shortID',handleAnalytics);


module.exports=router;