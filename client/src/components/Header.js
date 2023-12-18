import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { APP_LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(removeUser())
    navigate("/login")
  }

  return (
    <div className=" w-full h-32 bg-emerald-100 flex justify-between items-center">
      <div className="flex">
        {/* <div className=""> */}
          <img
              className="w-15 h-12 ml-2 rounded-full"
              src={APP_LOGO}
              alt="app-logo" 
          />
        {/* </div> */}
        <div
          className=" w-[250px] ml-4 px-4 py-2 rounded-lg text-2xl font-bold
          text-black border bg-white"
        >
          { user ? (`Welcome..! ${user.name}`) : "Welcome...dear!"}
        </div>
      </div>
      <div className="flex flex-row-reverse">
        {user
          ? (<>
            <div
              className="w-32 text-center mx-4 py-2 rounded-lg text-lg cursor-pointer 
               bg-red-400  text-white border"
              onClick={handleLogOut}
            >
              LogOut
            </div>
            <Link to="/addTask">
              <div
                className=" w-32 mr-10 py-2 text-center rounded-lg text-xl cursor-pointer
                bg-blue-600  text-white border"
              >
                AddTask
              </div>
            </Link>
          </>
          )
          : (
            <Link to={"/login"}>
              <div
               className=" w-40 text-center px-4 py-2 rounded-lg text-2xl 
                text-white border bg-purple-600 mr-10"
              >
                LogIn
              </div>
            </Link>
          )
        }

      </div>

    </div>
  )
}

export default Header