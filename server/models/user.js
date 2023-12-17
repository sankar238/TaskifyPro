const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String ,
        required : true,
        unique : true,
        trim : true,
        lowercase:true
    },
    password :{
        type : String,
        required :true
    }
});

const User = mongoose.model("user" , UserSchema);
module.exports = User;