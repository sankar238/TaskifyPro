import React, { useState,useRef } from "react";
import { APP_LOGO, BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validate";
import axios from "axios";
import {addUser} from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [errorMessage,setErrorMessage] = useState(null)
  const emailRef = useRef(null);
  const passwordRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    try{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // validate email,password 
        const message = validateForm(email,password)
        setErrorMessage(message)
        if(message) return ;

        // API call & handling response
        const response = await axios.post(`${BASE_URL}/api/user/login`,{email,password});
        const result = response.data.message;
        console.log(response.data)
        const {token , user} = response.data;
        const {name,emailId} = user;
        const uid = user._id;
        if(result.includes("success")){
          alert(result);
          navigate("/");
          dispatch(addUser({
            userId : uid,
            name : name,
            emailId :emailId,
            token : token
          }))
          // user details updated to store.
        }
        emailRef.current.value ="";
        passwordRef.current.value="";
    }catch(err){
        console.log(err)
        setErrorMessage(err.response.data.message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen
     bg-gray-100 bg-opacity-90"
    >
      <div className="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 w-1/3">

        <form onSubmit={handleSubmit}>
          {/*  logo */}
          <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto text-white 
           text-2xl font-bold mb-6"
          >
            <img
              src={APP_LOGO}
              alt="app_logo" />
          </div>
          {/* input fileds */}
          <div className="mb-6">
            <label 
            className="block text-gray-700 text-lg font-bold mb-2" 
            htmlFor="email">
              Email
            </label>
            <input
              className="border rounded w-full py-[10px] px-4 text-gray-700 
              leading-normal focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              required
            />
          </div>
          <div className="mb-6">
            <label 
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="password"
            >
              Password
            </label>
            <input
              className=" border rounded w-full py-2 px-3
               text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
              required
            />
          </div>
          {/* error message */}
          {errorMessage && <span className="text-red-400">{errorMessage}</span>}
          {/* submmit button */}
          <div className="mb-6 mt-4 pt-4 flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white 
              font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign In
            </button>
          </div>
          {/* suggestion to singup */}
          <div className="flex justify-center gap-1">
            <span>don't you have an account? </span>
            <Link to="/signup">
              <span className="text-blue-500  hover:text-blue-800  text-sm"
              > Sign Up
              </span>
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;

