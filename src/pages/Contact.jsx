import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";

const Contact = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-0.5 bg-gray-500 w-40"></div>
        <h2 className="text-3xl font-bold text-gray-800">CONTACT US</h2>
        <div className="h-0.5 bg-gray-500 w-40"></div>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        We would love to hear from you! Share your thoughts and queries with us.
      </p>

      {/* Contact Info Section */}
      <div className='flex flex-col md:flex-row justify-evenly items-center gap-8'>
        {/* Address */}
        <div className='flex flex-col items-center text-gray-700'>
          <IoLocationSharp size={40} className='mb-2 text-amber-600' />
          <h3 className="text-xl font-semibold mb-1">Registered Address</h3>
          <p>21/25, Sai Road</p>
          <p>Mohali, Punjab</p>
        </div>

        {/* Contact Details */}
        <div className='flex flex-col items-center text-gray-700'>
          <IoIosContacts size={40} className='mb-2 text-amber-600' />
          <h3 className="text-xl font-semibold mb-1">Contact Details</h3>
          <p>+91 0000000000</p>
          <p>sweets@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
