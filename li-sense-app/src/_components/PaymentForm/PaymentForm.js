import React, { useEffect, useState } from "react";
import "./payment.css";
import { useNavigate } from "react-router-dom";
import { BsCreditCardFill, BsFillCreditCard2FrontFill } from "react-icons/bs";

export default function PaymentForm() {
  const navigate = useNavigate();
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => response.json())
      .then((data) => setEstados(data));
  }, []);
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios")
      .then((response) => response.json())
      .then((data) => setCidades(data));
  }, []);
  return (
    <>
      <div className="container-pay">
        <div className="container-form-pay">
          {/* <h1> Adicionar nova forma de pagamento</h1> */}
          {/* <img className="img-cartao" src={Cartao} /> */}

          <form className="forms-pay">
            <span className="span-input2">Nome completo</span>
            <input
              type="name"
              className="form-control12"
              placeholder="nome completo"
            />

            <div className="input-container">
              <div className="dat-tel">
                <label className="span-input2">Data de nascimento</label>
                <input type="date" className="form-control-dat-tel" />
              </div>
              <div className="dat-tel">
                <label className="span-input2 ml-5">Telefone</label>
                <input
                  type="text"
                  maxLength={12}
                  className="form-control-dat-tel ml-5"
                  placeholder="(00) 0000-0000"
                />
              </div>
            </div>

            <label className="span-input2">E-mail</label>
            <input
              type="mail"
              className="form-control12"
              placeholder="@mail.lisense.com"
            />
            <div className="input-container-ece">
              <div className="dat-tel">
                <label className="span-input2">Endereço</label>

                <input
                  type="cod"
                  className="form-control-dat-tel"
                  placeholder="Rua "
                  // onChange={(event) => {setUserData({email: userData.email, senha: userData.senha, nome:event.target.value, sobrenome: userData.sobrenome, celular: userData.celular})}}
                />
              </div>
              <div className="dat-tel">
                <label className="span-input2"> Complemento/Nº</label>
                <input
                  type=""
                  className="form-control-dat-tel"
                  placeholder="Complemento/Nº"
                />
              </div>
              <div className="dat-tel">
                <label className="span-input2 ">Estado</label>
                <select className="estados" id="pag-from" name="pag-from">
                  {estados.map((estadoItem) => {
                    return (
                      <option key={estadoItem.id} value={estadoItem.sigla}>
                        {estadoItem.nome}
                      </option>
                    );
                  })}
                  {/* <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option> */}
                </select>
              </div>
            </div>
            <div className="input-container-cep">
              <div className="dat-cep">
                <label className="span-input2 ">Cidade</label>
                <select className="cidades" id="citys" name="citys">
                  {cidades.map((cidadesItem) => {
                    return (
                      <option key={cidadesItem.id} value={cidadesItem.sigla}>
                        {cidadesItem.nome}
                      </option>
                    );
                  })}
                </select>

                {/* <input
                  type="city"
                  className="form-control-dat-tel "
                  placeholder="Cidade "
                /> */}
              </div>
              <div className="dat-cep">
                <label className="span-input2 ml-5">Cep</label>

                <input
                  type="cep"
                  maxLength={9}
                  className="form-control-dat-tel ml-5"
                  placeholder="00-0000.000"
                />
              </div>
            </div>
          </form>

          <button
            type="submit"
            className="btn-pay"
            onClick={() => {
              navigate("/cart/payment/credit");
            }}
          >
            {" "}
            Adicionar Cartão
          </button>
          <button
            type="submit"
            className="btn-pay"
            id="myBtn"
            onClick={() => {
              navigate("/cart/payment/boleto");
            }}
          >
            {" "}
            Pagar por Boleto
          </button>
        </div>
      </div>
    </>
  );
}
