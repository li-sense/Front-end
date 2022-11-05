import React from "react";
import { useNavigate } from "react-router-dom";
import LisenseContext from "../../_context/LisenseContext";
import "./Card.css";
import { VscFile } from "react-icons/vsc";
import { FaShoppingCart, FaRegBookmark, } from "react-icons/fa";

export default function Card(props) {
  const { data } = props;
  const { setCurrentProduct } = React.useContext(LisenseContext);
  const navigate = useNavigate();
  const setProduct = (product) => { setCurrentProduct(product); navigate(`/product/${product.name}`)}
  return (
    <>
      <div
        className="productCard"
        onClick={() => {
          setProduct(data);
        }}
      >
        {/* <div class="icons"> */}
        <div className="productCard__mediaType">
          <VscFile className={"productCard__typeIcon"} />
        </div>
        <FaShoppingCart className={"productCard__cart"} />
        <FaRegBookmark className={"productCard__wishlist"} />
        {/* </div> */}

        <img src={data.url} className="productImage" alt="product-img" />
        {/* <div id="wrapper">
        </div> */}
          <div className="productInfo">
            {/* <div id="wrap"> */}

              <h3 className="productName">{data.name}</h3>
            {/* </div> */}
        </div>

        <p className="productDesc">{data.description}</p>
        {/* <div className="productPrice"> */}
            <p className="productPrice">{data.price}</p>
        {/* </div> */}
      </div>
    </>
  );
}
