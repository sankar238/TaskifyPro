const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.SECRET;


router.get("/",(req,res)=>{
    res.send ("this is the user ")
})

router.post("/register", async (req,res)=>{
    try{
        // validating data was done in the client side
        const {name,email,password} = req.body ;

        // check if user is alrady registered or not
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"user is already registerd"
            })
        }

        // bcrypt to hash the password;
        const hashedPassword = await bcrypt.hash(password,10)

        // creating user in the database
        const newUser = new User({
            name,email,password : hashedPassword
        })
        await newUser.save();

        // sending response
        res.status(200).json({
            message : "registration successful & please Login",
            newUser
        })
        
    }catch(err){
        res.status(400).json({
            message : "Server Error & registration failed "
        })
    }
})

router.post("/login",async(req,res)=>{
 try{
        // validating data was done in the client side
        const {email,password} = req.body ;

        // check if user is registered or not
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"user is not registerd"
            })
        }
        //comparing password & token generation
        console.log(secret)
        const match = await bcrypt.compare(password,user.password);
        if(match){
            const token = jwt.sign({
                exp : Math.floor(Date.now()/1000)+(600*600),
                data : user._id
            },secret)
            res.status(200).json({
                message : "login successful ",
                user: user,
                token : token
            })
        }
    } catch(err){
        res.status(400).json({
            message : "Server Error & login failed "
        })
    } 
})
module.exports = router;