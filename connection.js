const mongoose=require('mongoose');


async function connectionToMongodb(url){
    return (mongoose.connect(url)
    .then(()=>{
      console.log("mongodb connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    }))
}

module.exports={
    connectionToMongodb
}