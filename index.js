const express=require('express');
const URL=require("./models/url");
const {connectionToMongodb}=require("./connection");
const app=express();
const path=require('path');
const urlRouter=require('./routes/url');
const staticRouter=require("./routes/staticRouter");
require('dotenv').config();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
connectionToMongodb(process.env.URL);


app.set("view engine","ejs");

app.set("views",path.resolve('./views'));


// app.get('/test',async(req,res)=>{
//     const allUrls=await URL.find({});
     
//     res.render("home",{
//         urls:allUrls
//     })
// })



app.use('/url',urlRouter);
app.use("/",staticRouter);



app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${process.env.PORT}`);
})