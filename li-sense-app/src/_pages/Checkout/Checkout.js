import React from 'react'
import Cart from '../../_components/Cart/Cart'
import CheckoutComponent from '../../_components/Checkout/Checkout'
import LisenseContext from '../../_context/LisenseContext'
import './checkout.css'

export default function Checkout() {

  const {cart} = React.useContext(LisenseContext)
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
            {
              cart.length > 0 ?
              cart.map((value) => (
                <Cart items={value}/>
              ))
              : <div>
                <h1>Seu carrinho esta vazio, Continue comprando</h1>
              </div>
            }
           
          
          </div>
        </div>
        <div className="container-check">
          <CheckoutComponent cart={cart} />
        </div>
      </div>
    </>
  )
}
