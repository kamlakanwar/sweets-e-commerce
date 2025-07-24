import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);''
  const toggleMenu = () => setIsOpen(!isOpen);

 useEffect(() =>{
    const item = localStorage.getItem("formData");
      setIsLoggedIn( item ? true : false);
  },[loggedIn])

  console.log(loggedIn)

  return (
    <div className="bg-white shadow-md py-3 flex items-center justify-around relative">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="logo" loading="lazy" className="h-15 w-15" />
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Nav Links - Desktop */}
      <nav className="hidden md:flex gap-6 items-center">
        <Link to="/" className="text-gray-700 hover:text-gray-600 font-medium">Home</Link>
        <Link to="/products" className="text-gray-700 hover:text-gray-600 font-medium">Products</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-600 font-medium">Contact</Link>
    <Link
  to="/login"
  onClick={() => {
    if (loggedIn) {
      localStorage.removeItem("formData");
    }
  }}
  className="text-gray-700 hover:text-gray-600 font-medium"
>
  {loggedIn ? "Logout" : "Login"}
</Link>
  </nav>
        <Link to="/">
          <button className="bg-amber-200 cursor-pointer rounded-xl px-4 py-2 text-gray-800 font-semibold hover:bg-amber-300 transition">
            Order Now
          </button>
        </Link>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden z-10">
          <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 font-medium">Home</Link>
          <Link to="/products" onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 font-medium">Products</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 font-medium">Contact</Link>
          <Link to="/login" onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 font-medium">{loggedIn ? "Logout" : "Login"}</Link>
          <Link to="/" onClick={toggleMenu}>
            <button className="bg-amber-200  cursor-pointer rounded-xl px-4 py-2 text-gray-800 font-semibold hover:bg-amber-300 transition">
              Order Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
