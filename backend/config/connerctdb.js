const mongoose = require('mongoose');


const dbconnect =async()=>{
    try{
        await mongoose.connect('mongodb+srv://Jaydeep1:wy1fBftvpOoFU1el@cluster0.2e4fpu2.mongodb.net/?appName=Cluster0')
    }
    catch(err){
        console.log("Database connection failed", err);
        process.exit(1);
    }
}


module.exports=dbconnect;