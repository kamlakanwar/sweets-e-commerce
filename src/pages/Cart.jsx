import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, isLoggedIn } = useContext(AppContext);

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
    toast.info("Item removed from cart");
  };

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center underline mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className='flex justify-center items-center h-[60vh]'>
          <p className='text-xl sm:text-3xl text-center'>No item here!!</p>
        </div>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-6 rounded-lg bg-white shadow-md"
            >
              <img
                src={item.img}
                alt="cart-img"
                className="w-full sm:w-[15rem] h-[12rem] object-cover rounded-md"
              />
              <div className='flex flex-col justify-between gap-4 w-full'>
                <div>
                  <h1 className="font-semibold text-xl sm:text-2xl">{item.title}</h1>
                  <p className="text-sm sm:text-base">Quantity: {item.quantity}</p>
                  <p className="text-sm sm:text-base">Price: ₹{item.price}</p>
                </div>

                {/* Button and Delete icon in same row */}
                <div className='flex flex-row items-center gap-6'>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                    onClick={() => {
                      if (!isLoggedIn) navigate('/Login');
                    }}
                  >
                    Buy now
                  </button>
                  <span
                    onClick={() => handleDelete(item.id)}
                    className="cursor-pointer text-red-600 text-2xl sm:text-3xl hover:text-red-800"
                  >
                    <MdDelete />
                  </span>
                </div>

              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
