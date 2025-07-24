import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ img, title, quantity, price }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 text-center w-72">
      <img
        src={img}
        alt="product"
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <h4 className="text-sm text-gray-600">Quantity: {quantity}</h4>
      <div className='flex justify-evenly items-center gap-4'>
      <h1 className='font-bold text-2xl'> &#8377; {price}</h1>
      <button onClick={() =>{
         toast.success("item added to cart");
      }} className='bg-amber-400 p-2 m-2 rounded cursor-pointer'>Add to card</button>
    </div>
    </div>
  );
};

export default Card;
