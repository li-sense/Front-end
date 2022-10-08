import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
export default function Register() {
  const navigate = useNavigate();
  return (
    <div className='container-geral'>
      <div className='container-texto'>
        <h2>Crie a sua conta</h2>
        <span>"Facilite seus processos." <em>LI-SENSE</em>, onde você é importante</span>
      </div>
      <div className='container-panel'>
        <h1>Cadastro</h1>

        <div className='panel-form'>
          <div className='panel-row'>
            <label forHtml='nome-input'>Nome</label>
            <input type='text' placeholder='Digite seu nome'
              name='nome-input' id='nome-input' />
          </div>
          <div className='panel-row'>
            <label forHtml='password'>Senha</label>
            <input type='password' placeholder='Digite sua Senha'
              name='password' id='password'/>
          </div>
          <div className='panel-row'>
            <label forHtml='cpf-input'>CPF</label>
            <input type='text' placeholder='Digite seu CPF'
              name='cpf-input' id='cpf-input'/>
          </div>
          <div className='panel-row'>
            <label forHtml='tel-input'>Telefone</label>
            <input type='text' placeholder='Digite seu telefone'
              name='tel-input' id='tel-input'/>
          </div>
        </div>
      
        <div className='container-button'>
          <button type='submit' onClick={() => {navigate('/')}}>Concluir</button>
          <button type='reset'>Reiniciar</button>
          {/* 
            o botão de reiniciar por enquanto não tem funcionalidade porque 
            será mais facil implementa-lo quando estivermos usando hooks e states  
          */}
        </div>
      </div>
    </div>
  );
}
