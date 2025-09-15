import React,{useEffect} from "react"
import { getCurrentUser } from "../../apiCalls/authCalls.js"
import {useDispatch} from "react-redux"
import {setUserData, clearUserData, setAuthLoading} from "../redux/userSlice.js"

const useCurrentUser = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchUser = async()=>{
            dispatch(setAuthLoading())
            try{
            const result = await getCurrentUser();
            console.log(result)

            dispatch(setUserData(result))
            }catch(err){
                dispatch(clearUserData())
            }
    }
    fetchUser();
    },[dispatch])
}

export default useCurrentUser