import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cartItems"));
      if (Array.isArray(storedCart)) {
        setCartItems(storedCart);
      }
    } catch (error) {
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(cartItems)) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const item = localStorage.getItem("formData");
    setIsLoggedIn(!!item);
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) return prevItems;
      return [...prevItems, product];
    });
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const value = {
    loading,
    setLoading,
    isLoggedIn,
    setIsLoggedIn,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    isOpen,
    setIsOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
