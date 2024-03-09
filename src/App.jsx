import { useState } from 'react'

import HomePage from './Pages/HomePage'

import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Cards from './Pages/Cards/Cards';
import ColorsPage from './Pages/ColorPage/ColorsPage';
import ButtonsPage from './Pages/ButtonsPage/ButtonsPage';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ColorsPage/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/colors' element={<ColorsPage/>}/>
      <Route path='/buttons' element={<ButtonsPage/>}/>
    {/* <Cards/>
    <DynamicGradientDelight/>
    <ElevateMaterialize/>
    <SoftNeumorphicElegance/>
    <SleekMinimalistAura/> */}
    {/* <HomePage/> */}
    {/* <HomePage/> */}
    
      
    </Routes>
    </>
  )
}

export default App
