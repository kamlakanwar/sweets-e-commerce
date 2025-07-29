import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import Logo from '../assets/logo.png';
import { AppContext } from '../Context/AppContext';

const Navbar = () => {
  const { cartItems, loggedIn, setIsLoggedIn, isOpen, setIsOpen } = useContext(AppContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleAuthClick = () => {
    if (loggedIn) {
      localStorage.removeItem("formData");
      setIsLoggedIn(false);
      navigate('/');
    } else {
      navigate('/Login');
    }
  };

  return (
    <div className="bg-white shadow-md py-3 px-4 md:px-12 flex items-center justify-between relative z-20">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="logo" loading="lazy" className="h-13 w-14 ml-2 sm:ml-5" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        <Link to="/" className="text-gray-700 hover:text-gray-600 font-medium">Home</Link>
        <Link to="/products" className="text-gray-700 hover:text-gray-600 font-medium">Products</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-600 font-medium">Contact</Link>

        {/* Cart Icon with count */}
        <div
          onClick={() => navigate("/Cart")}
          className="flex items-center cursor-pointer text-gray-800 hover:text-amber-500 text-2xl mr-3"
        >
          <FiShoppingCart />
          <span className="ml-1 text-sm">({cartItems.length})</span>
        </div>

        {/* Auth Button */}
        <button
          onClick={handleAuthClick}
          className="bg-yellow-600 cursor-pointer text-white py-1 px-4 rounded hover:bg-yellow-700"
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden z-10">
          <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 font-medium">Home</Link>
          <Link to="/products" onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 font-medium">Products</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 font-medium">Contact</Link>

          {/* Cart in mobile menu */}
          <div
            onClick={() => {
              toggleMenu();
              navigate("/Cart");
            }}
            className="flex items-center gap-2 text-gray-800 hover:text-amber-500 text-lg cursor-pointer"
          >
            <FiShoppingCart />
            <span>Cart ({cartItems.length})</span>
          </div>

          <button
            onClick={() => {
              handleAuthClick();
              toggleMenu();
            }}
            className="bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
