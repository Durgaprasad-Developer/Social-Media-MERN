import React from 'react'
import { Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword' 
import Home from './pages/Home'
import useCurrentUser from './hook/useCurrentUser'
// import { useSelector } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'

function App() {
useCurrentUser()

// const userData = useSelector(state=>state.user)


  return (
   <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/forgot-password' element={<ForgotPassword/>} />
    <Route path='/home'element={<PrivateRoute><Home/></PrivateRoute>}/>
   </Routes>
  )
}

export default App
