import React from "react";
import LisenseContext from "../../_context/LisenseContext";
import axios from "axios";
import "./Product.css";
import { Components } from "../../_components/Components";

import { FaRegBookmark } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([])
  const [owner, setOwner] = React.useState('')
  const [isOwner, setIsOwner] = React.useState(false)
  React.useEffect(() => {
    const id = localStorage.getItem('userId')
    if(id && id == currentProduct.vendedor_id) {
      setIsOwner(true)
    }else {
      setIsOwner(false)
    }
    getProducts(setData)
    getOwner()
  },[])

  const { currentProduct, setCurrentProduct } = React.useContext(LisenseContext);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  
  const getProducts = (set) => {
   
    axios.get('https://dev.li-sense.xyz/api/v1/produtos/produtos?limit=50&offset=0').then((res) => {
      set(res.data.items)
      let id = window.location.pathname.toString().split('/')[2]
      res.data.items?.map((value) => {
        if(value.id == id) {
          setCurrentProduct(value)
        }
      })
    })
  }

  const getOwner = async( ) => {
    axios.get(`https://dev.li-sense.xyz/api/v1/vendedor/${currentProduct.id}`).then((res) => {
      setOwner(res.data.nome)
      console.log("res", res)
    })
  }

  const getProduct = () => {
    let id = window.location.pathname.toString().split('/')[2]
    
  }
  return (
    <>
      <div className="container-product">
        <div className="container-image-product">
          <img className="img-details" src={currentProduct.imagem_produto} alt="img"/>
        </div>

        <div className="container-product-details">
        
          <div className="container-wishlist-icon">
          {
            isOwner && 
            <AiFillEdit
              className={"productCard__wishlist"}
              onClick={() => {
                navigate("/product/:id/edit");
              }}
            />
          }
            
            <FaRegBookmark className={"productCard__wishlist"} />
          </div>

          <div className="h1-title-p">
            <h1>{currentProduct.nome}</h1>
          </div>
          <hr className="solid"></hr>
          <div className="container-info-box">
            <p className="field-info">Id do produto: {currentProduct.id}</p>
            <p className="field-info">
              Tipo de licen??a: {currentProduct.sale_type}
            </p>
            <p className="field-info">Vendido por: {owner}</p>
          </div>
          <div className="container-sale-box">
            <span className="sp1">
              <p>Valor para compra em definitivo:</p>
            </span>
            <p className="sale-price">{currentProduct.preco}</p>
            <div></div>
            <button className="buy-button">Adquirir Licen??a</button>
          </div>
        </div>
      </div>

      <hr className="solid"></hr>
      <p className="details-product">
        <span className="title-desc">Descri????o:</span>
        {currentProduct.descricao}
      </p>
      <hr className="solid"></hr>

      <h1 className="title-desc" id="also-see">
        Veja tamb??m:
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
          {data.map((_value, key) => (
            <div className=" d inline-block p-2 cursor-pointer overflow-y-auto" key={key}>
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
