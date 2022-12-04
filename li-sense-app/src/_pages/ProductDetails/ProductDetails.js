import React from "react";
import LisenseContext from "../../_context/LisenseContext";
import "./Product.css";
import Arrow from "../../_assets/img/arrow.png";
import { Components } from "../../_components/Components";
import { data } from "../../FakeData";
import { FaRegBookmark } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


export default function ProductDetails() {
  const { currentProduct } = React.useContext(LisenseContext);
  console.log(currentProduct);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 250;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 250;
  };
  return (
    <>
      <div className="container-product">
        <div className="container-image-product">
          <img className="img-details" src={currentProduct.url} />
        </div>

        <div className="container-product-details">
          <div className="container-wishlist-icon">
            <button>
              <FaRegBookmark className={"productCard__wishlist"} />
            </button>
          </div>

          <div className="h1-title-p">
            <h1>{currentProduct.name}</h1>
          </div>
          <hr class="solid"></hr>
          <div className="container-info-box">
            <p class="field-info">Id do produto: {currentProduct.id}</p>
            <p id="type" class="field-info">
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

      <h1 className="title-desc" id="also-see">Veja também:</h1>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.slice(0, 8).map((_value, key) => (
            <div className=" card-slider inline-block p-2 cursor-pointer overflow-y-auto">
                <Components.Card data={_value} key={key} />
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}
