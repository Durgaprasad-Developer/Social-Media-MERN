import { Navigate } from "react-router";
import{useSelector} from "react-redux";

export default function PrivateRoute ({children}) {
    const user = useSelector((state)=>state.user.user);
    const loading = useSelector((state)=>state.user.loading);
    const initialized = useSelector((state)=>state.user.initialized)

if(!initialized || loading){
    return <div style={{padding:20}}>Loading...</div>;
}
// setTimeout(()=>{
return user? children : <Navigate to="/signin" replace/>
}