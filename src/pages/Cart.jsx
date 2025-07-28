import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, isLoggedIn } = useContext(AppContext);

    const handleDelete = (item) => {
     removeFromCart(item);
    toast.info("Item removed from cart");
    };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center underline">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className='flex justify-center items-center h-[100vh]'>
          <p className='text-4xl text-center'>No item here!!</p>
        </div>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex gap-10 p-5 m-10 rounded-md bg-white">
              <img src={item.img} alt="cart-img" className='w-[15rem] h-[13rem]' />
              <div className='flex flex-col gap-3'>
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
                <div className='flex items-center gap-10 my-10'>
                <button
                  className="bg-yellow-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() => {
                    if (!isLoggedIn) navigate('/Login');
                  }}
                >
                  Buy now
                </button>
                  <span
                    onClick={()=> handleDelete(item.id)}
                    className="cursor-pointer text-red-600 text-3xl hover:text-red-800"
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
