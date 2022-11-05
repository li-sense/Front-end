import React from "react";
import { useNavigate } from "react-router-dom";
import LisenseContext from "../../_context/LisenseContext";
import "./Card.css";
import Arrow from "./img/arrow.png";
import { VscFile } from "react-icons/vsc";
 import {
   FaShoppingCart,
   FaRegBookmark,
   FaStar,
   FaFireAlt,
 } from "react-icons/fa";

export default function Card(props) {
  const { data } = props;
  const { setCurrentProduct } = React.useContext(LisenseContext);
  const navigate = useNavigate();
  const setProduct = (product) => {
   setCurrentProduct(product);
   navigate(`/product/${product.name}`)
  }
  return (
    <>
      {/* <div className="flex flex-col productCard overflow-hidden m-4" onClick={() => {setProduct(data)}}>
        <div className="w-full flex justify-end items-center">
          <div className="vsicon flex items-center justify-center">
            <VscFile size={20} />
          </div>
        </div>
        <div className="view flex flex-col items-center">
          <img src={data.url} className="img" alt="" />
          <div className="flex items-center">
            <div className="w-[80%] ml-4">
              <p className="productName">{data.name}</p>
              <p className="productPrice">{data.price}</p>
              <p className="productDesc">{data.description}</p>
            </div>
            <div className="arrows h-full w-[20%] -mt-8 -ml-8">
              <img src={Arrow} className="arrow"></img>
              <img src={Arrow} className="arrow"></img>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="productCard"
        onClick={() => {
          setProduct(data);
        }}
      >
        <div className="productCard__mediaType">
          <VscFile className={"productCard__Icon"} />
        </div>
        <FaShoppingCart className={"productCard__cart"} />
        <FaRegBookmark className={"productCard__wishlist"} />
        
        <img src={data.url} className="productImage" alt="product-img" />

        <div className="productList">
          <div className="productCard__Content">
            <h3 className="productName">{data.name}</h3>
            <div className="displayStack__1">
              <div className="productDec">
                <p className="productDesc">{data.description}</p>
              </div>
              <div className="productPrice">
                <p>{data.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
<IconContext.Provider value={{ color: 'white', size: '12px'}}>
    <div id="content" style={{backgroundImage: ''}}>
      <div className="card" id="one">
        <div id='icon'>
          <div className='wrapper flex items-center mt-2'>
          < VscFile size={30}/>
          </div>
        </div>
        <img src={Image} className="view" alt="" />

        <p className="title">Nome</p>
        <p className="price">R$200,00</p>
        <p className="desc">
          Lorem ipsum dolor sit aconsectetur adipisicing elit. Liobcaecati
          eligendi tempora nesciunt.
        </p>

      </div>
    </div>
    </IconContext.Provider>

 <div className="arrows">
        <img src={Arrow} id="upperArrow"></img>
          <img src={Arrow} id="lowerArrow"></img>
        </div>
*/
