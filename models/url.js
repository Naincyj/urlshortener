const mongoose=require('mongoose');


const urlSchema=new mongoose.Schema({
    shortURL:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    visitHistory:[{timeStamp:{
        type:Number
    }}]
    
},{
    timestamps:true
}
);

const URL=mongoose.model('URlshortener',urlSchema);

module.exports=URL;