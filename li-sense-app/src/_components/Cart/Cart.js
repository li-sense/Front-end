import React from 'react'
import './cart.css'
import { BsTrash } from 'react-icons/bs'
import axios from 'axios'
import LisenseContext from '../../_context/LisenseContext'

export default function Cart(props) {
  const { filterCart } = React.useContext(LisenseContext)
  const { items, id } = props
  const [owner, setOwner] = React.useState('')
  React.useEffect(() => {
    getOwner()
  },[])
  const getOwner = async( ) => {
    axios.get(`https://dev.li-sense.xyz/api/v1/vendedor/${items.vendedor_id}`).then((res) => {
      setOwner(res.data.nome)
    })
  }

  return (
    <>
      <div className="list-content">
        <div className="product-detail">
          <img src={items.imagem_produto} />
          <div className="name-detail">
            <h2>{items.descricao}</h2>

            <h3>Vendido por: {owner}</h3>
          </div>
        </div>
        <div className="price">
          {items.preco}
          <span onClick={() => { filterCart(id) }}>
            <BsTrash />
            Remover
          </span>
        </div>
      </div>
    </>
  )
}
