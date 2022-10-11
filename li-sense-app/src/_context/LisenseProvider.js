import React, { useState } from "react";
import LisenseContext from "./LisenseContext";

export const LisenseProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState([]);
  return (
    <LisenseContext.Provider value={{currentProduct, setCurrentProduct}}>{children}</LisenseContext.Provider>
  );
}
