import './styles/output.css';
import './styles/style.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Documentation from './pages/Documentation'
import About from './pages/About';
import Login from "./pages/Login";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/documentation' element={<Documentation />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}



