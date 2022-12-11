import React, { useState } from "react";
import LisenseContext from "./LisenseContext";

export const LisenseProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [user, setUser] = useState([]);
  const [isSeller, setSeller] = useState(false);
  const [company, setCompany] = useState(false)
  const cart = []

  const addItemInCart = (item) => {

    cart.push(item)
    localStorage.setItem('cart', cart)

  }
  return (
    <LisenseContext.Provider value={{currentProduct, setCurrentProduct, setUser, user, addItemInCart, cart, isSeller, setSeller, company, setCompany}}>{children}</LisenseContext.Provider>
  );
}
