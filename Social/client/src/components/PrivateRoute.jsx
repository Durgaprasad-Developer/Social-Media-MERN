import { Navigate } from "react-router";
import{useSelector} from "react-redux";

export default function PrivateRoute ({children}) {
const user = useSelector(state=>state.user.userData);
setTimeout(()=>{
if(!user) return <Navigate to="/signin" replace/>
},500)
return children
}