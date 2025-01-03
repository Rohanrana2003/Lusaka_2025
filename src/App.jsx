/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/')
  }, [])

  return (

      <Routes>
      
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/contact' element={<Contact/>}/>

      </Routes>

  )
}

export default App
