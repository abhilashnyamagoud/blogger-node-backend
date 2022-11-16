const mongoose=require('mongoose');

const CONNECTION_URI =`mongodb://localhost:27017/blogger-data`

const configureDB=()=>{
    mongoose.connect(CONNECTION_URI)
    .then(()=>{
        console.log("Connected To DB")
    })
    .catch((err)=>{
        console.log("Error Connecting With DB",err)
    })
}

module.exports=configureDB