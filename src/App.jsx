import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/contact' element={<Contact/>}/>

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
