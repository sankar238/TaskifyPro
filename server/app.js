const express = require("express")
const app = express();
const cors = require("cors")
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");


// middleware
app.use(cors({
    origin: "http://localhost:3000",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}))
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/",(req,res)=>{
    res.send("home page")
})


app.use("/api/user" , userRoutes);
app.use("/api",taskRoutes);

app.get("*",(req,res)=>{
    res.send("invalid route")
})



module.exports = app