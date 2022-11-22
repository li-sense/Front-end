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
          <img className="img-details" src={currentProduct.url} />
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
            <span>
              <p>Valor para compra em definitivo:</p>
            </span>
            <p className="sale-price">{currentProduct.price}</p>
            <div></div>
            <button class="buy-button">Adquirir Licença</button>
          </div>
        </div>
      </div>


      <hr class="solid"></hr>
      <p className="details-product">
        <p className="title-desc">Descrição:</p>
        {currentProduct.description}
      </p>
      <hr class="solid"></hr>
    </>
  );
}
