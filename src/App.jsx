import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from './pages/Products';
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import {ProductData} from "./data"


function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   console.log(isLoggedIn)

   useEffect(() =>{
    const item = localStorage.getItem("formData");
    setIsLoggedIn( item ? true : false);
  },[])

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products ProductData={ProductData} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
