const shortid=require('shortid');
const URL=require("../models/url");

async function handleCreateUrl(req,res){
    if(!req.body)
   return res.status(400).json({error:"please enter url"});

    const newShortId=shortid.generate();

    await URL.create({
        shortURL:newShortId,
        redirectURL:req.body.User_url,
        visitHistory:[]
    })

    const allURLS=await URL.find({});

    return res.render('home',{
        id:newShortId,
        allurls:allURLS
    })
}


async function  handleRedirect(req,res){
    const data=  await URL.findOneAndUpdate({shortURL:req.params.shortID,},
        {$push:{visitHistory:{timeStamp:Date.now()}}}
       )
    
       res.redirect(data.redirectURL);
}



async function handleAnalytics(req,res){
    const data = await URL.findOne({ shortURL:req.params.shortID });
  return res.json({
    totalClicks: data.visitHistory.length,
    analytics: data.visitHistory,
  })
}








module.exports={
    handleCreateUrl,
    handleRedirect,
    handleAnalytics
}