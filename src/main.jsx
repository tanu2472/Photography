
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react"; import ReactDOM from "react-dom/client";
import  './index.css'
import Navbar from '../components/Navbar'
import Home from '../view/Home'
import About from '../view/About'
import Contact from '../view/Contact'
import Footer from '../components/Footer'
import Gallery from '../view/Gallery'
import PackageCard from '../components/PackageCard'

const root = createRoot(document.getElementById('root'))
root.render(
  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PackageCard/:id" element={<PackageCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  
);


