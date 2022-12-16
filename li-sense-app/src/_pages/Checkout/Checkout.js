import React from 'react'
import Cart from '../../_components/Cart/Cart'
import CheckoutComponent from '../../_components/Checkout/Checkout'
import LisenseContext from '../../_context/LisenseContext'
import './checkout.css'
import { BsTrash } from 'react-icons/bs'

export default function Checkout() {
  const { cart , clearCart} = React.useContext(LisenseContext)
  return (
    <>
      <div className="page-checkout">
        <div className="container-cart">
          <div className="title-container">
            <h1>Carrinho de compras</h1>
         {
          cart.length > 0 &&
          <button onClick={() => {clearCart()}} >
          <BsTrash /> Remover todos os produtos
        </button>
         }
          </div>
          <div className="container-detail">
            <div className="list-titles">
              <p>Produto</p>
              <p>Preço</p>
            </div>
            {cart.length > 0 ? (
              cart.map((value, key) => <Cart items={value} key={key} id={value.id}/>)
            ) : (
              <div>
                <h1>Seu carrinho esta vazio, Continue comprando</h1>
              </div>
            )}
          </div>
        </div>
        <div className="container-check">
          <CheckoutComponent cart={cart} />
        </div>
      </div>
    </>
  )
}
/*
  <button>
              <BsTrash /> Remover todos os produtos
            </button>
*/
