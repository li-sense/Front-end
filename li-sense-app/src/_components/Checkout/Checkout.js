import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export default function Checkout(props) {
  const { cart } = props;
  const [price, setPrice] = React.useState(0)
  const setCartPrice = () => {
    let init = 0;
    if(cart) {
      cart.map((value) => {
        parseInt(value.preco) ?  init += parseInt(value.preco) : ''
      })
      setPrice(init)
    }
  }
  const navigate = useNavigate();

  React.useEffect(() => {
    setCartPrice()
  },[])
  return (
    <>
      <div className="container-checkout">
        <h1>Resumo do pedido</h1>

        <div className="text1">
          <p>Produtos</p>
          <p>{price},00 R$</p>
        </div>

        <div className="text2">
          <p>{cart ? cart.length : 0}</p>

          <p>-----</p>
        </div>

        <div className="container-info-geral ">
          <div className="text3">
            <p>Total</p>
            <p>{price},00 R$</p>
          </div>
          <div className="text4">
            <p>R$ {price},00 no boleto</p>
            <p>R${price},00 em  ate 5x no cartão de credito</p>
          </div>
        </div>
        <div className="container-button-res">
          <button
            onClick={() => {
              navigate("/cart/payment");
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    </>
  );
}
