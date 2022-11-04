import React from 'react'
import './cart.css'

export default function Cart() {
  return (
    <>
      <div class="list-content">
        <div class="product-detail">
          <img src="https://images-americanas.b2w.io/produtos/01/00/img/4240755/6/4240755664G1.jpg" />
          <div class="name-detail">
            <h2>
              Smart TV LED 50" Semp 50RK8500 RokuUHD HDR Wifi Dual Band 4 Hdmi 1
              USB
            </h2>
            <h3>Vendido por: Nikko BR</h3>
            <p>Remover</p>
          </div>
        </div>
        <div class="price">R$ 2.199,99</div>
      </div>

      <div class="list-content">
        <div class="product-detail">
          <img src="https://images-americanas.b2w.io/produtos/01/00/img/3119794/1/3119794119_1SZ.jpg" />
          <div class="name-detail">
            <h2>Cadeira Gamer Cinza Reclinável e Giratória GT9 Max - DPX</h2>
            <h3>Vendido por: Nikko BR</h3>
            <p>Remover</p>
          </div>
        </div>
        <div class="price">R$ 999,99</div>
      </div>
    </>
  )
}
