import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const AllRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/nav' element={<Navbar/>}/>

          
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AllRoutes