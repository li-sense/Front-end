import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-checkout">
        <h1>Resumo do pedido</h1>

        <div className="text1">
          <p>produto</p>
          <p>preço</p>
        </div>

        <div className="text2">
          <p>qt produto</p>

          <p>-----</p>
        </div>

        <div className="container-info-geral ">
          <div className="text3">
            <p>Total</p>
            <p>R$ 3,000</p>
          </div>
          <div className="text4">
            <p>R$ 2,800 no boleto</p>
            <p>R$ 3,000 em 1x no cartão de credito</p>
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
