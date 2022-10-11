import React from 'react';
import { Form, useNavigate } from 'react-router-dom';
import './styles.css';
import Logocentral from "../../_assets/img/logoredonda.png"
import {AiOutlineUserAdd } from 'react-icons/ai' ; 
import {FiMail} from 'react-icons/fi' ;
import {BiLockAlt} from 'react-icons/bi' ;
export default function Register() {
  const navigate = useNavigate();
  return (
    <div className='container-all'>
      <div className='container-texto'>
      <img className='img2' src= {Logocentral}></img>
      <h1>Cadastro</h1>
        <span>"Facilite seus processos." <em>LI-SENSE</em>, onde você é importante.</span>
      </div>
      <div className='container-panel'>
       
        <div className='panel-form'>
          {/* <div className='panel-row'>
            <span className= 'span-input'>Nome Completo</span>
            <input className='mb-3'type='text' placeholder='Digite seu nome'
              name='nome-input' id='nome-input' />
          </div>
          <div className='panel-row'>
            <label forHtml='password'>Senha</label>
            <input type='password' placeholder='Digite sua Senha'
              name='password' id='password'/>
          </div>
          <div className='panel-row'>
            <label forHtml='cpf-input'>CPF</label>
            <input className='mb-3' type='text' placeholder='Digite seu CPF'
              name='cpf-input' id='cpf-input'/>
          </div>
          <div className='panel-row'>
            <label forHtml='tel-input'>Telefone</label>
            <input className='mb-3' type='text' placeholder='Digite seu telefone'
              name='tel-input' id='tel-input'/>
          </div> */}
            <div className="mb-3">
              <span className='span-input1'>Nome completo</span>
              <div className='container-input'>
                <input
                  type="email"
                  className="form-control"
                  placeholder="nome completo"
                />
              <AiOutlineUserAdd size={24} className='icon-register' />
              </div>
            </div>
            <div className="mb-3">
              <span className='span-input1'>Email</span>
              <div className='container-input'>
                <input
                  type="email"
                  className="form-control"
                  placeholder="mail@mail.com"
                />
            <FiMail size={24} className='icon-register' />
              </div>
            </div>
            <div className="mb-3">
              <span className='span-input1'>Senha</span>
              <div className='container-input'>
                <input
                  type="email"
                  className="form-control"
                  placeholder="senha"
                />
          <BiLockAlt size={24} className='icon-register' />
              </div>
            </div>
            <div className="mb-3">
              <span className='span-input1'>Repetir senha</span>
              <div className='container-input'>
                <input
                  type="email"
                  className="form-control"
                  placeholder="repetir senha"
                />
          <BiLockAlt size={24} className='icon-register' />
              </div>
            </div>
        </div>
      
        <div className='container-button'>
          <button type='submit'className='btn-cad' onClick={() => {navigate('/')}}>Cadastar</button>
          
          {/* 
            o botão de reiniciar por enquanto não tem funcionalidade porque 
            será mais facil implementa-lo quando estivermos usando hooks e states  
          */}
        </div>
        
      </div>
    </div>
  );
}