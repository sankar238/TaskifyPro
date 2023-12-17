import React, { useState } from "react";
import { APP_LOGO, BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { validateForm } from "../utils/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errorMessage , setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
     try{
        event.preventDefault();
        console.log("Form Data:", formData);

        // form validation 
        const {email,password,confirmPassword} = formData;
        const message = validateForm(email,password,confirmPassword);
        setErrorMessage(message)
        if(message) return ;

        // API call
        const response = await axios.post(`${BASE_URL}/api/user/register`,formData);
        const result= response.data.message;
        if(result.includes("success")){
            alert(result)
            navigate("/login")
        }
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
     }catch(err){
        setErrorMessage(err.response.data.message)
     }
    };

    return (
        <div 
        className="flex items-center justify-center min-h-screen
         bg-gray-100  bg-opacity-90"
        >
            <div className="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 w-1/3">
                <form onSubmit={handleSubmit}>
                    <div 
                     className="w-20 h-20 bg-blue-500 rounded-full mx-auto
                     text-white text-2xl font-bold mb-6"
                    >
                        <img
                            src={APP_LOGO}
                            alt="app_logo" 
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                         className="block text-gray-700 text-lg font-semibold mb-2" 
                         htmlFor="name"
                        >
                        Name
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700
                             leading-normal focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                        className="block text-gray-700 text-lg font-semibold mb-2" 
                        htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700
                             leading-normal focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                        className="block text-gray-700 text-lg font-semibold mb-2" 
                        htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700
                             leading-normal focus:outline-none focus:shadow-outline"
                            id="password"
                            type="text"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                        className="block text-gray-700 text-lg font-semibold mb-2" 
                        htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700 
                            leading-normal focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    { errorMessage && (
                        <span className="text-red-400">{errorMessage}</span>
                        )
                    }
                    <div className="mb-6 mt-4 pt-4 flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700
                             text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="flex justify-center gap-1">
                        <span>already have an account?</span>
                        <Link to="/login">
                            <span className="text-blue-500 
                             hover:text-blue-800  text-sm"
                            > Sign-in
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
