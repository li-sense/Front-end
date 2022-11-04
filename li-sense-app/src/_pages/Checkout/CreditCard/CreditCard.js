// import React from "react";

// export default function CreditCard() {
//   return (
//     <>
//     <div>
//       Form cartao de credito
//     </div>
//     </>
//   )
// }

import React, { useState } from "react";
import './creditcard.css';
import { useNavigate } from 'react-router-dom';
import {BsCreditCardFill, BsFillCreditCard2FrontFill   } from 'react-icons/bs';


export default function PaymentForm() {
  const navigate = useNavigate();
  const [cartao, setCartao] = useState('');
  return (
    <>
     <script src='./masc.js'></script>
 
    <div className="container-cred">

      <div className="container-form-cred">
        <h1>Adicionar nova forma de pagamento</h1>
        {/* <img className="img-cartao" src={Cartao} /> */}
        <label for="pag-from">Tipo de Pagamento</label>

	          <select id="pag-from" name="pag-from">
              
              <option value="Cartão">Cartão</option>
              <option value="Boleto" onChange={() => {navigate("/cart/payment/boleto")}}>Boleto</option>
	          </select>
        <form className="forms-cred">
        <span className='span-input-cred'>Número do Cartão</span>
        <div className="div-extra">
         <input
                 
                  type= "caracter"
                  maxlength="19"
                  className="form-control-cred"
                  placeholder="0000.0000.0000.0000"
                          
                />
               < BsFillCreditCard2FrontFill   size={24} className='icon-cred' />
         </div>
                <span className='span-input-cred'>Nome completo</span>
         <input
                  type="name"
                  className="form-control-cred"
                  placeholder="nome completo"
 
                />
                <span className='span-input-cred'>Data de Validade</span>
          <input
                  type="month"
                  className="form-control-cred"
                  placeholder="validade"
                  
                />
                <span className='span-input-cred'>CVV</span>
          <div className="div-extra">
          <input
                  type="cod"
                  className="form-control-cred"
                  maxLength={3}
                  placeholder="código de segurança"
                  // onChange={(event) => {setUserData({email: userData.email, senha: userData.senha, nome:event.target.value, sobrenome: userData.sobrenome, celular: userData.celular})}}
               
               />
               <BsCreditCardFill size={24} className='icon-cred' />
           </div> 
          </form>
          <label for="parc-from">
           Número de parcelas 
           </label>
	          <select className="parc" id="parc" name="parc">
		        <option >1x</option>
		        <option >2x</option>
		        <option >3x</option>
            <option >4x</option>
            <option >5x</option>
            <option >6x</option>
	          </select>

            <button type="submit" className="btn-cred" onClick={() => {navigate("/cart/payment/boleto")}}> Adicionar Cartão</button>
      </div>
      
    </div>
    </>
  )
}
