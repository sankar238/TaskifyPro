import TaskList from "./TaskList";
import { useSelector } from "react-redux";

const Body = () => {
  const userAutheticated = useSelector((store)=>(store.user));
  return (
    <div>

      { userAutheticated 
       ? ( <TaskList />)
       : (<h1 className="font-semibold text-3xl text-center my-5">
          Please Login to view Tasks
          </h1>
        )
      }

    </div>
  )
}

export default Body