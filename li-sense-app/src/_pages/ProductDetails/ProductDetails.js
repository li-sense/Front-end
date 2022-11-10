import React from "react";
import LisenseContext from "../../_context/LisenseContext";
import { useNavigate } from "react-router-dom";
import './Product.css';
export default function ProductDetails() {
  const { currentProduct } = React.useContext(LisenseContext);
  console.log(currentProduct);
  const navigate = useNavigate()
  return (
    <>
    <div className="w-full h-full flex flex-col">
      <button onClick={() => {navigate(`/product/${currentProduct.id}/edit`)}}>
        Editar Produto
      </button>
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
