const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config()
const dbURI = process.env.MONGO_URI

const connectDB =  async ()=>{
// Connect to MongoDB using the URI retrieved from the environment variable
    try{
        const connect = await mongoose.connect(dbURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected ${connect.connection.host}`)
      
    }catch(err){
        console.log("Error Connecting to MongoDB",err)
        process.exit(1)
    }
}
module.exports = connectDB;