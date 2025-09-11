import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword' 
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/forgot-password' element={<ForgotPassword/>} />
    <Route path='/home'element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
