"use client";

import { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = [];

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
