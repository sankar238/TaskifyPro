const express = require("express")
const app = express();
const cors = require("cors")
const userRoutes = require("./routes/user");

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/api/user" , userRoutes)

module.exports = app