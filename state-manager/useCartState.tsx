import React, { createContext, useContext, useEffect, useState } from "react";

export const Cart = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [cartDoc, setCartDoc] = useState([]);

  return (
    <Cart.Provider value={{ cartDoc, setCartDoc }}>{children}</Cart.Provider>
  );
};

export const useCartState = () => useContext(Cart);
