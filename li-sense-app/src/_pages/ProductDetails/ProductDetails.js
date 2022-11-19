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
        {/* <div className="container-image-row">Cachorro</div> */}
        <div className="container-image-product">
          <div className="carrossel"></div>
          <div className="container-image-prod">
            <img className="bg" src={currentProduct.url} />
          </div>
        </div>
        <div className="container-text-details">
        <div className="product-details-wishlist">
          <FaRegBookmark className={"productCard__wishlist"} />

        </div>

          <div className="h1-title-p">
            <h1>{currentProduct.name}</h1>
          </div>
          <hr class="solid"></hr>
            <div className="info">
              <p class="field_desc">Id do produto: {currentProduct.id}</p>
              <p class="field_desc">
                Tipo de licença: {currentProduct.sale_type}
              </p>
              <p class="field_desc">Vendido por: {currentProduct.vendor}</p>
            </div>
          <div className="frame">
            <p>Valor para compra em definitivo:</p>
            <p className="texto-prod">{currentProduct.price}</p>
            <div>
              
            </div>
            <button class="buy">Adquirir Licença</button>
          </div>
        </div>
      </div>
      <div className="rest">
        <hr class="solid"></hr>
        <p className="details-prod">
          <p className="desc-title">Descrição:</p>
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
