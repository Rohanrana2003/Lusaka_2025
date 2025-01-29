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
import Event3 from './components/subComponents/Event3';
import Magazine from './components/Magazine';
import Event2 from './components/subComponents/Event2';
import Event1 from './components/subComponents/Event1';

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

        <Route path='/gallery' element={<Gallery />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/magazines' element={<Magazine />} />
        <Route path='/mkushi-agri-expo' element={<Event1 />} />
        <Route path='/copperbelt-show' element={<Event2 />} />
        <Route path='/lusaka-motor-show' element={<Event3 />} />


      </Routes>

      <Footer />

    </MyContext.Provider>

  )
}

export default App
