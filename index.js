const express=require('express');
const URL=require("./models/url");
const {connectionToMongodb}=require("./connection");
const app=express();
const path=require('path');
const urlRouter=require('./routes/url');
const PORT=8000;
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



app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})