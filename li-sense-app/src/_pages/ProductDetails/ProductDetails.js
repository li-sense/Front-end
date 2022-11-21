import React from "react";
import LisenseContext from "../../_context/LisenseContext";
import "./Product.css";
import { FaRegBookmark } from "react-icons/fa";


export default function ProductDetails() {
  const { currentProduct } = React.useContext(LisenseContext);
  console.log(currentProduct);
  return (
    <>
      <div className="container-product">
        <div className="container-image-product">
          <div className="container-image-prod">
            <img className="d-img" src={currentProduct.url} />
          </div>
        </div>


        <div className="container-product-details">
        <div className="container-wishlist-icon">
          <FaRegBookmark className={"productCard__wishlist"} />
        </div>

          <div className="h1-title-p">
            <h1>{currentProduct.name}</h1>
          </div>
          <hr class="solid"></hr>
            <div className="container-info-box">
              <p class="field-info">Id do produto: {currentProduct.id}</p>
              <p class="field-info">
                Tipo de licença: {currentProduct.sale_type}
              </p>
              <p class="field-info">Vendido por: {currentProduct.vendor}</p>
            </div>
          <div className="container-sale-box">
            <p>Valor para compra em definitivo:</p>
            <p className="sale-price">{currentProduct.price}</p>
            <div>
              
            </div>
            <button class="buy-button">Adquirir Licença</button>
          </div>
        </div>
      </div>

      <div className="rest">
        <hr class="solid"></hr>
        <p className="details-product">
          <p className="title-desc">Descrição:</p>
          {currentProduct.description}
        </p>

      </div>
    </>
  );
}

//PARTE QUE ESTAVA ANTES
// import React from "react";
// import LisenseContext from "../../_context/LisenseContext";
// import { useNavigate } from "react-router-dom";
// import './Product.css';
// export default function ProductDetails() {
//   const { currentProduct } = React.useContext(LisenseContext);
//   console.log(currentProduct);
//   const navigate = useNavigate()
//   return (
//     <>
//     <div className="w-full h-full flex flex-col">
//       <button onClick={() => {navigate(`/product/${currentProduct.id}/edit`)}}>
//         Editar Produto
//       </button>
//       <div className="flex items-center justify-around w-full">
//       <div className="flex flex-col mr-4 items-center justify-center description">
//         <h1>{currentProduct.name}</h1>
//         <p className="border p-4 w-48 cursor-pointer">
//           {currentProduct.price}
//         </p>
//         <p>{currentProduct.description}</p>
//       </div>
//       <div className="image">
//       <img className="bg" src={currentProduct.url}/>
//       </div>
//       </div>
//     </div>
//     </>
//   )
// }
