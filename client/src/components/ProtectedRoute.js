import HomePage from "./HomePage"
import {Navigate } from "react-router-dom";

const ProtectedRoute = () => {
 const isUserLoggedIn = true;
  return (
    <div>
        {isUserLoggedIn ? <HomePage/> : <Navigate to="/"/>}
    </div>
  )
}

export default ProtectedRoute