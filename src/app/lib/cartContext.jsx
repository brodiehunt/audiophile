"use client";

import { createContext, useReducer, useEffect } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = [];

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartObj = JSON.parse(cart);
      dispatch({
        type: "restore",
        data: cartObj,
      });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
