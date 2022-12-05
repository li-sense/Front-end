import React from 'react'
import { useNavigate } from 'react-router-dom'
import LisenseContext from '../../_context/LisenseContext'
import './Card.css'
import { VscFile } from 'react-icons/vsc'
import { FaShoppingCart, FaRegBookmark } from 'react-icons/fa'

export default function Card(props) {
  const { data } = props
  const { setCurrentProduct, addItemInCart } = React.useContext(LisenseContext)
  const navigate = useNavigate()
  const setProduct = product => {
    setCurrentProduct(product)
    navigate(`/product/${product.name}`)
  }

  return (
    <>
      <div
        className="productCard"
       
      >
        <div className="icones">
          <div>
            <VscFile className={'productCard__typeIcon'}/>
          </div>
          <div>
            <FaShoppingCart className={'productCard__cart'}  onClick={() => {addItemInCart(data)}}/>
            <FaRegBookmark className={'productCard__wishlist'} />
          </div>
        </div>
      <div  onClick={() => {
          setProduct(data)
        }}>
      <img src='https://i.pinimg.com/236x/65/f7/76/65f776ea5db956ccd49de5242c81eb38.jpg' className="productImage" alt="product-img" />

<h3 className="productName">{data.nome}</h3>

<p className="productDesc">{data.descricao}</p>
<p className="productPrice">{data.preco}</p>
      </div>
      </div>
    </>
  )
}
