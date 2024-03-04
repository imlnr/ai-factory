import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Imagegen from '../pages/Imagegen'
import Resumegen from '../pages/Resumegen'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/image-generator' element={<Imagegen/>}/>
        <Route path='/resume-generator' element={<Resumegen/>}/>
        
    </Routes>
  )
}

export default Mainroutes