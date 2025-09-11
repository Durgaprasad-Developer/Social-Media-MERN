import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword' 

function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/forgot-password' element={<ForgotPassword/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
