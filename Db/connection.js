const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/restfulapi").then(()=>{
    console.log("connection successful");
}).catch(()=>{
    console.log("Error while connecting to db");
})

