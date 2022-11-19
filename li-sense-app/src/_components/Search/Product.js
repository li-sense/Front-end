import React from 'react'
import './product.css'
import { RiStarSFill } from 'react-icons/ri'

export default function Product() {
  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src="https://images-americanas.b2w.io/produtos/01/00/img/4240755/6/4240755664G1.jpg" />
        </div>
        <div className="product-body">
          <div className="product-body-stars">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <span>50 avaliações</span>
          </div>

          <h2>
            Smart TV LED 50" Semp 50RK8500 RokuUHD HDR Wifi Dual Band 4 Hdmi 1
            USB
          </h2>
          <h3>Vendido por: Nikko BR</h3>
        </div>
        <div className="product-cart">
          <h2>R$ 2.199,99</h2>
          <button>Carrinho</button>
        </div>
      </div>
    </>
  )
}
