import React, { useState } from "react";
import LisenseContext from "./LisenseContext";

export const LisenseProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [user, setUser] = useState([])
  const cart = []

  const addItemInCart = (item) => {

    cart.push(item)
    localStorage.setItem('cart', cart)

  }
  return (
    <LisenseContext.Provider value={{currentProduct, setCurrentProduct, setUser, user, addItemInCart, cart}}>{children}</LisenseContext.Provider>
  );
}
