import React, { useContext} from 'react';
import { toast } from 'react-toastify';
import { AppContext } from '../Context/AppContext'; 

const Card = ({ id, img, title, quantity, price }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = () => {
    const item = { id, img, title, quantity, price };
    addToCart(item); 
    toast.success("Item added to cart");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 text-center w-72 hover:scale-105">
      <img
        src={img}
        alt="product"
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <h4 className="text-sm text-gray-600">Quantity: {quantity}</h4>

      <div className="flex justify-evenly items-center gap-4 mt-2">
        <h1 className="font-bold text-2xl">&#8377; {price}</h1>
        <button
          onClick={handleCart}
          className="bg-amber-400 px-4 py-2 rounded cursor-pointer hover:bg-amber-500 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;