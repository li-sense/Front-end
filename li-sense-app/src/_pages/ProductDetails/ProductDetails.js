import React from "react";
import LisenseContext from "../../_context/LisenseContext";
import './Product.css';
export default function ProductDetails() {
  const { currentProduct } = React.useContext(LisenseContext);
  console.log(currentProduct);
  return (
    <>
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-around w-full">
      <div className="flex flex-col mr-4 items-center justify-center description">
        <h1>{currentProduct.name}</h1>
        <p className="border p-4 w-48 cursor-pointer">
          {currentProduct.price}
        </p>
        <p>{currentProduct.description}</p>
      </div>
      <div className="image">
      <img className="bg" src={currentProduct.url}/>
      </div>
      </div>
    </div>
    </>
  )
}
