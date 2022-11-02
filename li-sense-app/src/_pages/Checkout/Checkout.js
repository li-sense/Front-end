import React from 'react'
import Cart from '../../_components/Cart/Cart'
import CheckoutComponent from '../../_components/Checkout/Checkout'
import './checkout.css'

export default function Checkout() {
  return (
    <>
      <div className="page-checkout">
        <div class="container-cart">
          <h1>Carrinho de compras</h1>
          <div class="container-detail">
            <div class="list-titles">
              <div>Produto</div>
              <div>Preço</div>
            </div>
            <Cart />
          </div>
        </div>
        <div class="container-check">
          <CheckoutComponent />
        </div>
      </div>
    </>
  )
}
