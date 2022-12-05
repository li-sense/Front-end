import React from "react";
import LisenseContext from "../../_context/LisenseContext";
import "./Product.css";
import { Components } from "../../_components/Components";
import { data } from "../../FakeData";
import { FaRegBookmark } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { currentProduct } = React.useContext(LisenseContext);
  console.log(currentProduct);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="container-product">
        <div className="container-image-product">
          <img className="img-details" src={currentProduct.url} />
        </div>

        <div className="container-product-details">
          <div className="container-wishlist-icon">
            <AiFillEdit
              className={"productCard__wishlist"}
              onClick={() => {
                navigate("/product/:id/edit");
              }}
            />
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
            <span className="sp1">
              <p>Valor para compra em definitivo:</p>
            </span>
            <p className="sale-price">{currentProduct.price}</p>
            <div></div>
            <button
              class="buy-button"
              onClick={() => {
                navigate("/product/creatproduct");
              }}
            >
              Adquirir Licença
            </button>
          </div>
        </div>
      </div>

      <hr class="solid"></hr>
      <p className="details-product">
        <p className="title-desc">Descrição:</p>
        {currentProduct.description}
      </p>
      <hr class="solid"></hr>

      <h1 className="title-desc" id="also-see">
        Veja também:
      </h1>

      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.slice(0, 8).map((_value, key) => (
            <div className=" d inline-block p-2 cursor-pointer overflow-y-auto">
              <Components.Card className="d" data={_value} key={key} />
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
