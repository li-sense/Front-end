import React, { useState } from 'react';
import './Profile.css';
import Logocentral from "../../_assets/img/logoredonda.png";
export default function Profile(props){
  const [nome, setNome] = useState(props.nome);
  const [senha, setSenha] = useState(props.senha);
  const [email, setEmail] = useState(props.email);
  const [cpf, setCpf] = useState(props.cpf);
  const [telefone, setTelefone] = useState(props.telefone);

  return (
    <div className="w-screen">
      <div className='text-2xl py-1 px-1 font-bold container-text '>
        <h1>Painel do Usuário</h1>
      </div>
      <div className='flex-row max-w-4xl mx-auto'>
        <div className='flex flex-row px-5'>
          <div className='flex-3 py-4 px-5'>
            <div className='py-2'>
              <label 
                forhmtl='username'
                className='text-base font-medium'>
                  Nome completo
              </label>
              <input
                name='username'
                className='form-control'
                placeholder={`${nome}`}
              />
              <div className='px-6 text-sm text-justify'>
                Esse é nome como você deverá ser mencionado nas compras ou registros.
              </div>
            </div>
            <div className='py-2'>
              <label 
                forhmtl='email'
                className='mb-3 block text-base font-medium'>
                  Email Público
              </label>
              <input
                name='email'
                className='form-control'
                placeholder={`${email}@mail.com`}
              />
              <div className='px-6 text-sm text-justify'>
                Você pode adicionar novos emails para facilitar a verificação.
              </div>
            </div>
          </div>
          <div className='flex-1 py-4 px-5'>
            <label forhtml='avatar' className='mb-3 block text-base font-medium'>Foto de Perfil</label> 
            <img src={Logocentral} name='avatar' className='rounded-full w-[160px] h-[160px]' />
          </div>
        </div>
        <div className='flex-column px-5'>
          <div className='flex flex-row justify-evenly'>
            <div className='py-4'>
              <label 
                forhtml='cpf' 
                className='mb-3 block text-base font-medium'>
                  CPF
              </label>
              <div className='form-button'>
                <button 
                  type='submit'
                  name='cpf'
                  className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none' 
                  onClick={() => {}}>
                    Alterar o CPF
                </button>
              </div>
            </div>
            <div className='py-4'>
              <label 
                forhtml='password' 
                className='mb-3 block text-base font-medium'>
                  Senha
              </label>
              <div className='form-button'>
                <button
                  type='submit'
                  name='password'
                  className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none' 
                  onClick={() => {}}>
                    Reiniciar Senha
                </button>
              </div> 
            </div>
          </div>
        </div>
        <div className='p-6 max-w-sm mx-auto'>
          <div className='py-2'>
            <div className='form-button'>
              <button
                type='submit'
                className='hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 text-center text-base font-semibold text-white outline-none' 
                onClick={() => {}}>
                  Torne-se um criador
              </button>
            </div>
          </div>
          <div className='py-2'>
            <div className="form-button">
              <button
                type='submit'
                className='hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 text-center text-base font-semibold text-white outline-none' 
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