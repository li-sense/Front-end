import React, { useState } from 'react';
import './Profile.css';
export default function Profile(props){
  const [nome, setNome] = useState(props.nome);
  const [senha, setSenha] = useState(props.senha);
  const [email, setEmail] = useState(props.email);
  const [cpf, setCpf] = useState(props.cpf);
  const [telefone, setTelefone] = useState(props.telefone);

  return (
    <div className="container-all">
      <div className='container-text'>
        <h1>Painel do Usuário</h1>
      </div>
      <div className='container-panel'> 
        <div className='panel-form'>
          <div className='form-group'>
            <div className="form-row">
              <span className='span-input'>Nome completo</span>
              <div className='container-input'>
                <input
                  type="email"
                  className="form-control"
                  placeholder={`${nome}`}
                />
              </div>
            </div>
            <div className='desc-input'>
              Esse é nome como você deverá ser mencionado nas compras ou registros.
            </div>
          </div>
          <div className='form-group'>
            <div className='form-row'>
              <span className='span-input'>Email Público</span>
              <div className='container-input'>
                <input
                  type="email"
                  className="form-control"
                  placeholder={`${email}@mail.com`}
                />
              </div>
            </div>
            <div className='desc-input'>
              Você pode adicionar novos emails para facilitar a verificação.
            </div>
          </div>
          <div className='form-group'>
            <span className='span-input'>CPF</span>
            <div className='form-button'>
              <button 
                type='submit'
                className='btn-cad' 
                onClick={() => {}}>
                  Alterar o CPF
              </button>
            </div>
          </div>
          <div className='form-group'>
            <span className='span-input'>Senha</span>
            <div className='form-button'>
              <button
                type='submit'
                className='btn-cad' 
                onClick={() => {}}>
                  Reiniciar Senha
              </button>
            </div> 
          </div>
          <div className='form-row'>
            <div className='form-button'>
              <button
                type='submit'
                className='btn-cad' 
                onClick={() => {}}>
                  Torne-se um criador
              </button>
            </div>
            <div className='form-button'>
              <button
                type='submit'
                className='btn-cad' 
                onClick={() => {}}>
                  Apagar sua conta
              </button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}