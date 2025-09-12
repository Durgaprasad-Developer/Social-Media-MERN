import axios from 'axios';
import { API_BASE_URL } from './config';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
})

// Route - /api/auth/signup

export const signUp = async({name, userName, email, password}) =>{
    try{
        const response = await api.post(`/api/auth/signup`, {
            name, userName, email, password,
        })
        console.log("Response from server:", response);
        return response.data

    }catch(error){  
        console.error("Error during sign up:", error);
    }
};

export const signIn = async({userName, password}) =>{
    try{
        const response = await api.post(`/api/auth/signin`, {
            userName, password
        })
        console.log("Response from server:", response);
        return response.data
    }catch(err){
        console.log(err)
    }
}