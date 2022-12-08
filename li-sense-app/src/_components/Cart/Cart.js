import React from 'react'
import './cart.css'

export default function Cart(props) {
  const { items } = props

  return (
    <>
      <div className="list-content">
        <div className="product-detail">
          <img src="https://images-americanas.b2w.io/produtos/01/00/img/4240755/6/4240755664G1.jpg" />
          <div className="name-detail">
            <h2>
             {items.descricao}
            </h2>
            
            <h3>Vendido por: Nikko BR</h3>
            <p>Remover</p>
          </div>
        </div>
        <div className="price">{items.preco}</div>
      </div>
    </>
  )
}
