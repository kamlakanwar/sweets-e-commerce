import React, { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from './pages/Products';
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Spinner from './components/Spinner';
import { AppContext } from './Context/AppContext';
import Cart from './pages/Cart';

function App() {
  const { loading } = useContext(AppContext); 

   if (loading) {
    return <Spinner />; 
  }

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Cart' element={<Cart add />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
