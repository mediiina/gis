import React from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about';
import Aqi from './components/aqi';
import City from './components/city';
import Home from './components/home';
import Sensor from './components/sensor';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/aqi" element={<Aqi/>}></Route>
        <Route path="/city" element={<City/>}></Route>
        <Route path="/sensor" element={<Sensor/>}></Route>
      </Routes>
      <HeroSection/>
    </Router>

  );
}


export default App;
