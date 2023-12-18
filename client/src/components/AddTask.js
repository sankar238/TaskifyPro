import { useRef, useState } from "react";
import { validateTitle } from "../utils/validate";
import { useSelector } from "react-redux";
import { ADD_TASK_URL } from "../utils/constants";
import {Link} from "react-router-dom";
const AddTask = () => {
  const titleRef = useRef(null);
  const completedRef = useRef(null);
  const [isError, setIsError] = useState(true);
  const [errorMessage , setErrorMessage] = useState(null)
  const user = useSelector(store => store.user);
  const {token} = user;

  const handleTask = async () => {
    try {
      const title = titleRef.current.value.trim();
      const completed = completedRef.current.value;
      // validation
        const message = validateTitle(title,completed);
        setIsError(true)
        setErrorMessage(message);
        if (message) return;
        console.log(title, "-", completed);   
        console.log(user)
       
        // api call
        const response = await fetch(ADD_TASK_URL,{
          method : "POST",
          headers : {
              "Content-Type": "application/json",
              'Accept': 'application/json',
              "authorization" : `Bearer ${token}`,
            },
          body : JSON.stringify({
              title,completed
            })
        });

        if(response.ok){
          const data = await response.json();
           console.log(data)
           setIsError(false)
           setErrorMessage(data.message)
        }
      // clearing input fields after successful response
      titleRef.current.value = '';
      completedRef.current.value = '';

    }catch(err) {
      setIsError(true)
      setErrorMessage(err.message || "An error occurred. Please try again.")
    }
  }

  return (
    <div className="absolute bg-gray-100 w-full min-h-screen ">
      <h1 className="font-bold text-lg text-center text-purple-600 m-4 ">
        -- Add Your Task Here --
      </h1>
      <div
        className=" w-2/3 flex bg-white m-auto items-center
       shadow-lg rounded-2xl justify-around"
      >
        <div className="my-2 py-2">
          <label
            className="font-semibold text-lg "
            htmlFor="title"
          >
            Title :
          </label>
          <input
            className="w-15 mx-2 px-5 py-2 text-base border rounded-lg
           bg-gray-50  focus:outline-none "
            id="title"
            placeholder="Enter Task"
            ref={titleRef}
            required
          />
        </div>
        <div>
          <label
            className="font-semibold text-lg"
            htmlFor="completed"
          >
            Completed :
          </label>
          <select
            className="w-20 mx-2 px-3 py-2 text-base border rounded-lg 
             bg-gray-50 focus:outline-none "
            id="completed"
            defaultValue={false}
            ref={completedRef}
            required
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <button
          className=" mx-2 px-10 py-2 border rounded-lg text-white text-lg
           border-green-100 bg-blue-500 hover:bg-blue-700"
          onClick={handleTask}
        >
          AddTask
        </button>
      </div>
      {isError 
        ? (<p className="m-4 p-4 text-center text-red-300 text-lg text-semibold">
          {errorMessage}
          </p>)
        : (<p className="m-4 p-4 text-center text-green-500 text-2xl text-bold">
          {errorMessage}
          </p>
        )
      }
    
      <div className="flex justify-center mt-20">
        <Link to={"/"}>
          <span 
          className=" px-4 py-2 bg-sky-300  border rounded-lg text-slate-700"
          >
            GoToHomePage
          </span>
        </Link>
      </div>
      
    </div>
  )
}

export default AddTask