import { useState, useEffect } from "react";
import { GET_TASKS_URL } from "../utils/constants";
import TaskHeader from "./TaskHeader";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const [tasks, setTasks] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch(GET_TASKS_URL);

      if (!response.ok) {
        console.log("Failed to fetch tasks");
      }
      const data = await response.json();
      console.log(data)
      setTasks(data); // data is an array of tasks
    } catch (err) {
      console.error(err.message || "Error while fetching the data");
    }
  };
  const handleEditTask = async (taskId)=>{

  }
  const handleDeleteTask = async(taskId)=>{

  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
      <div>
        <div>
          <h1 className="font-bold text-3xl text-center my-5">Your Tasks are Here</h1>
          <TaskHeader/>
        </div>
        <div>
          { (tasks && tasks.length > 0)
            ? (
                tasks.map((task,index) => (
                  <TaskCard 
                  key={task._id} 
                  task={task} 
                  number={index+1}
                  taskId={task._id}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                  />
                )))
            :( <p 
                className="text-center text-lg font-semibold text-red-400"
                >
                  No tasks available
              </p>
            )
          }
        </div>
      </div>
  );
};

export default TaskList;
