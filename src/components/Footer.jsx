import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-amber-200 text-gray-700 mt-10 px-6 py-8 bottom-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
      
        <div className="flex flex-col items-center">
          <img src={Logo} alt="logo" className="h-12 mb-2" />
          <p className="text-sm">© {new Date().getFullYear()} sweets Bakery.</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h4 className="font-semibold text-gray-800 mb-1">Quick Links</h4>
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/products" className="hover:text-gray-900">Products</Link>
          <Link to="/contact" className="hover:text-gray-900">Contact</Link>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h4 className="font-semibold text-gray-800 mb-1">Connect</h4>
          <a href="mailto:info@sweets.com" className="hover:text-gray-900">info@sweets.com</a>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
