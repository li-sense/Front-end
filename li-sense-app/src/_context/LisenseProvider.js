import React, { useState } from "react";
import LisenseContext from "./LisenseContext";

export const LisenseProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [user, setUser] = useState([]);
  const [isSeller, setSeller] = useState(false);
  const [company, setCompany] = useState(false);
  const [cart, setCart] = useState([]);

  React.useEffect(() => {
    var cartItems = localStorage.getItem("cart");
    if (cartItems) {
      var jsonItems = JSON.parse(cartItems);
      setCart(jsonItems);
    }
  }, []);

  const addItemInCart = (item) => {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const filterCart = (id) => {
    setCart(cart.filter((value) => value.id !== id));
    var filtered = cart.filter((value) => value.id !== id);
    localStorage.setItem("cart", filtered);
  };

  const clearCart = () => {
    setCart([])
    const empty = []
    localStorage.setItem("cart", empty);
  }
  return (
    <LisenseContext.Provider
      value={{
        currentProduct,
        setCurrentProduct,
        setUser,
        user,
        addItemInCart,
        cart,
        isSeller,
        setSeller,
        company,
        setCompany,
        filterCart,
        clearCart,
      }}
    >
      {children}
    </LisenseContext.Provider>
  );
};
