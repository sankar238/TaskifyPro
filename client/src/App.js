import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css";
import Body from "./components/Body";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";
import Signup from "./components/SignUp";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const appRouter = createBrowserRouter([
  {
    path :"/",
    element : <HomePage/>
  },{
    path : "/login",
    element : <Login/>
  },{
    path:"/signup",
    element : <Signup/>
  },{
    path : "/addTask",
    element : <AddTask/>
  }
  // {
  //   path: "/",
  //   element: <Login />
  // },
  // {
  //   path: "/Home",
  //   element: <ProtectedRoute />,
  //   children: [
  //     {
  //       path: "add",
  //       element: <AddTodo />
  //     },
  //     {
  //       path: "",
  //       element: <Body />
  //     }
  //   ]
  // },
])


function App() {
  return (
    <Provider store={appStore}>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
