import React from 'react'
import Cart from '../../_components/Cart/Cart'
import CheckoutComponent from '../../_components/Checkout/Checkout'
import './checkout.css'

export default function Checkout() {
  return (
    <>
      <div className="page-checkout">
        <div className="container-cart">
          <h1>Carrinho de compras</h1>
          <div className="container-detail">
            <div className="list-titles">
              <div>Produto</div>
              <div>Preço</div>
            </div>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>
        <div className="container-check">
          <CheckoutComponent />
        </div>
      </div>
    </>
  )
}
