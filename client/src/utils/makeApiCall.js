import { useSelector } from "react-redux";
import axios from "axios" ; 
import { BASE_URL } from "./constants";

const useApiCall = async (title,completed) => {
   try{
        const user = useSelector(store => store.user);
        const {token} = user;
        const taskData = {title,completed};
        const headers = {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
        const response = await axios.post(`${BASE_URL}/api/task`,taskData,headers);
        const data = response.data;
        return data;
    }catch(err){
        return err.response.data;
    }
}

export default useApiCall