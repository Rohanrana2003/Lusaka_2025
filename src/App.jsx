/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import { Routes, Route, useNavigate } from "react-router-dom";
import Gallery from './components/Gallery';
import MyContext from './context/MyContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(1);

  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <MyContext.Provider value={[selectedButton, setSelectedButton]}>
      <Header />

      <Routes>
      
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/gallery' element={<Gallery />} />

      </Routes>

      <Footer />

    </MyContext.Provider>

  )
}

export default App
