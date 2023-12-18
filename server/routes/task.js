const express = require("express");
const router = express.Router();
const Task = require("../models/Task")
const { getTasks, getTaskById,
    deleteTaskById, updateTaskById } = require("../controllers/task")
const middleware = require("../middleware/middleware");

// create Task
router.post("/task/add",middleware, async (req, res) => {
    try {
        const { title, completed } = req.body;
        const userId = req.user;
        console.log(userId);
        const newTask = new Task({
            title,
            completed,
            createdBy: userId
        })
        await newTask.save();

        return res.status(200).json({
            message: "Task added successfully"
        })

    } catch (err) {
        res.status(400).json({
            message: "error while adding task"
        })
    }

})

router.get('/getTasks', getTasks);
router.get('/getTaskById/:id', getTaskById);
router.delete('/deleteTaskById/:id', deleteTaskById);
router.put("/updateTaskById/:id", updateTaskById);

module.exports = router;

// Put => client needs to replace an existing Resource entirely, they can use PUT
// patch => When client doing a partial update, they can use HTTP PATCH
