import React, { useState } from "react";
import LisenseContext from "./LisenseContext";

export const LisenseProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [user, setUser] = useState([])
  return (
    <LisenseContext.Provider value={{currentProduct, setCurrentProduct, setUser}}>{children}</LisenseContext.Provider>
  );
}
