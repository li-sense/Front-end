import React, { useState } from "react";
import "./creditcard.css";
import { useNavigate } from "react-router-dom";
import { BsCreditCardFill, BsFillCreditCard2FrontFill } from "react-icons/bs";

export default function PaymentForm() {
  const navigate = useNavigate();
  const [cartao, setCartao] = useState("");
  function funcao1() {
    alert("Cartão adicionado!");
  }
 
  return (
    <>
    

      <div className="container-cred">
        <div className="container-form-cred">
          <h1>Adicionar cartão como nova forma de pagamento</h1>

          <form className="forms-cred">
            <div className="div-extra-cred">
              <div className="div-nome-band ">
                <label className="span-input-cred">Número do Cartão</label>

                <input
                  type="caracter"
                  maxlength="19"
                  className="form-control-dat-tel"
                  placeholder="0000.0000.0000.0000"
                />
              </div>
              <div className="div-nome-band ">
                <label className="span-input-cred-ml5">Bandeira</label>
                <select className="bandeiras">
                  <option >Visa</option>
                  <option >MasterCard</option>
                  <option >HiperCard</option>
                  <option >OuroCard</option>
                  <option >Nubank</option>
                  <option >Elo</option>
                  <option >Aura</option>
                </select>
                
              </div>
            </div>

            <label className="span-input-cred">Nome completo</label>
            <input
              type="name"
              className="form-control-cred"
              placeholder="nome completo"
            />
            <label className="span-input-cred">Data de Validade</label>
            <input
              type="month"
              className="form-control-cred"
              placeholder="validade"
            />
            <label className="span-input-cred">CVV</label>
            <div className="div-extra">
              <input
                type="cod"
                className="form-control-cred"
                maxLength={3}
                placeholder="código de segurança"
              />
            </div>
          </form>
          <label for="parc-from">Número de parcelas</label>
          <select className="parc" id="parc" name="parc">
            <option>1x</option>
            <option>2x</option>
            <option>3x</option>
            <option>4x</option>
            <option>5x</option>
            <option>6x</option>
          </select>
          <div className="btn-add-voltar">
            <button
              type="submit"
              className="btn-cred"
              onClick={() => {
                funcao1();
              }}
            >
              Adicionar Cartão
            </button>
            <button
              type="submit"
              className="btn-voltar"
              onClick={() => {
                navigate("/cart/payment");
              }}
            >
              {" "}
              Voltar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
