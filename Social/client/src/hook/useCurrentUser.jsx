import React,{useEffect} from "react"
import { getCurrentUser } from "../../apiCalls/authCalls.js"
import {useDispatch} from "react-redux"
import {setUserData} from "../redux/userSlice.js"

const useCurrentUser = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchUser = async()=>{
        try{
            const result = await getCurrentUser();
            console.log(result)

            dispatch(setUserData(result))
        }catch(err){
            console.error(err)
        }
    }
    fetchUser();
    },[])
}

export default useCurrentUser