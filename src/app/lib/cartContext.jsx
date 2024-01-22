"use client";

import { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = [
    {
      _id: "65a8ab62f10354fc4716f39a",
      abbreviation: "zx9",
      price: 450000,
      quantity: 2,
      cartImg: "/assets/cart/image-zx9-speaker.jpg",
      alt: "zx9 speaker",
    },
    {
      _id: "65ac6fa8a0634fefe59b3261",
      abbreviation: "yx1",
      price: 59900,
      quantity: 1,
      cartImg: "/assets/cart/image-yx1-earphones.jpg",
      alt: "yx1 wireless earphones",
    },
    {
      _id: "65ac6fa8a0634fefe59b3252",
      abbreviation: "xx99 mark II",
      price: 299900,
      quantity: 3,
      cartImg: "/assets/cart/image-xx99-mark-two-headphones.jpg",
      alt: "xx99 mark II headphones",
    },
  ];

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
