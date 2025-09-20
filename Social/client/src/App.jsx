import React from 'react'
import { Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword' 
import Home from './pages/Home'
import useCurrentUser from './hook/useCurrentUser'
import { useSelector } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import { Navigate } from 'react-router-dom'

function App() {
useCurrentUser()
const userData = useSelector(state => state.user);

// const userData = useSelector(state=>state.user)
console.log(userData)

  return (
   <Routes>
    <Route path='/' element={!userData?<LandingPage/>:<Navigate to="/home"/>} />
    <Route path='/signup' element={!userData?<Signup/>:<Navigate to="/home"/>} />
    <Route path='/signin' element={!userData?<Signin/>:<Navigate to="/home"/>} />
    <Route path='/forgot-password' element={!userData?<ForgotPassword/>:<Navigate to="/home"/>} />
    <Route path='/home'element={userData?<Home/>:<Navigate to="/signin"/>}/>
   </Routes>
   
  )
}

export default App
