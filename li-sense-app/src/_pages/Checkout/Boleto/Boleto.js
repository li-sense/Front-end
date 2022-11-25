import React, { useState } from "react";
import "./boleto.css";
import { useNavigate } from "react-router-dom";

export default function Boleto() {
  const navigate = useNavigate();
  function funcaoB() {
    alert("Boleto Gerado e enviado para seu email!");
  }
  return (
    <>
      <form>
        <div className="container-boleto">
          <form className="boleto">
            <div className="container-form-boleto">
              <div className="titulo">
                <span>Preencha as informações para gerar o seu boleto</span>
              </div>

              <span className="span-boleto">Nome completo</span>
              <input
                type="name"
                className="form-boleto"
                placeholder="nome completo"
              />
              <span className="span-boleto">CNPJ</span>
              <input type="number" className="form-boleto" placeholder="cnpj" />
              <span className="span-boleto">CPF</span>
              <input type="cpf" className="form-boleto" placeholder="cpf" />
              <span className="span-boleto">Data de pagamento</span>
              <input
                type="date"
                className="form-boleto"
                placeholder="data de pagamento"
              />
              <span className="span-boleto">Valor total</span>
              <input
                type=""
                className="form-boleto"
                placeholder="valor total"
              />
              <div className="btn-boleto-div">
                <button className="btn-boleto" onClick={funcaoB}>
                  Gerar Boleto
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
          </form>
        </div>
      </form>
    </>
  );
}
