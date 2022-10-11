import React from "react";
import LisenseContext from "../../_context/LisenseContext";
export default function ProductDetails() {
  const { currentProduct } = React.useContext(LisenseContext);
  console.log(currentProduct);
  return (
    <>
    <div>
      pagina de detalhes
    </div>
    </>
  )
}
