const Task = require("../models/Task");

// GET all tasks 
const getTasks = async(req,res)=>{
    try{
        const tasks = await Task.find({});
        return res.status(200).json(tasks)

    }catch(err){
        return res.status(500).json({message : err.message});
        console.log(err.message)
    }
}

// GET by Id 
const getTaskById = async(req,res)=>{
    try{
        const id = req.params.id
        const oneTask = await Task.findOne({_id : id});
        if(!oneTask){
            res.status(400).json({
                message : `No Task With id :${id}`
            })
        }
        res.status(200).json(oneTask)

    }catch(err){
        res.status(500).json({message : err.message})
    }
}

// DELETE by Id
const deleteTaskById = async (req,res)=>{
    try{
        const id = req.params.id;
        const deletedTask = await Task.findByIdAndDelete({_id : id});
        if(!deletedTask){
            res.status(400).json({
                message : `No Task With id :${id}`
            })
        }
        res.status(200).json(deletedTask)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

// UPDATE task by Id
const updateTaskById = async (req,res)=>{
    try{
        const id   = req.params.id ;
        const data = req.body ;
        const updateTask = await Task.findByIdAndUpdate({_id : id},data,{ new: true, runValidators: true});
        if(!updateTask){
            res.status(400).json({
                message : `No Task With id :${id}`
            })
        }
        res.status(200).json(updateTask)
    }catch(err){
        res.status(500).json({message : err.message})
    }
    
}

module.exports = {getTasks,getTaskById,deleteTaskById,updateTaskById}
