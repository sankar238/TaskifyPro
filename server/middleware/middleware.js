const UserC = require("../models/User");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;


const middleware = async(req,res,next)=>{
    try{
        if(req.headers.authorization){
            const token = req.headers.authorization.split("Bearer ")[1];
            // console.log(token)
            // console.log(secret)

            const decoded = jwt.verify(token, secret);
            if (decoded) {
              console.log(decoded.data);
              const user = await UserC.findOne({ _id: decoded.data });
              req.user = user._id;
              next();
              return;
            }
        }
    }catch(err){
       return  res.status(400).json({
            message: "please login"
        })
    }
}

module.exports = middleware;