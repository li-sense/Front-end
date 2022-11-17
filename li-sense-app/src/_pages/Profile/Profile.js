import React, { useEffect, useState } from 'react';
import './Profile.css';
import Logocentral from "../../_assets/img/logoredonda.png";
import LisenseContext from '../../_context/LisenseContext';
import { useNavigate } from 'react-router-dom';
export default function Profile(props){
  const [nome, setNome] = useState(props.nome);
  const [senha, setSenha] = useState(props.senha);
  const [email, setEmail] = useState(props.email);
  const [cpf, setCpf] = useState(props.cpf);
  const [telefone, setTelefone] = useState(props.telefone);
  const { user } = React.useContext(LisenseContext);

  return (
    <div className="w-screen">
      <div className='text-2xl py-1 px-1 font-bold container-text'>
        <h1>Painel do Usuário</h1>
      </div>
      <div className='flex-row max-w-4xl mx-auto py-6'>
        <div className='text-xl pt-4 font-extrabold'>
          <h1>Informações Públicas</h1>
        </div>
        <div className='border-2 border-slate-500 rounded-lg my-4'>
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
                  placeholder={user.profileObj ? user.profileObj.name : ''}
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
                  placeholder={user.profileObj ? user.profileObj.email : ''}
                />
                <div className='px-6 text-sm text-justify'>
                  Você pode adicionar novos emails para facilitar a verificação.
                </div>
              </div>
            </div>
            <div className='flex-1 py-4 px-5'>
              {/*Componente da foto de perfil não esta otimizado e tende a distorcer com o tamanho da tela */}
              <label forhtml='avatar' className='mb-3 block text-base font-medium'>Foto de Perfil</label> 
              <img src={user.profileObj ? user.profileObj.imageUrl : ''} name='avatar' className='rounded-full w-[160px] h-[160px]' />
            </div>
          </div>
        </div>
        <div className='text-xl pt-4 font-extrabold'>
          <h1>Informações Privadas</h1>
        </div>
        <div className='border-2 border-slate-500 rounded-lg my-4'>
          <div className='p-8 grid grid-cols-2 gap-4'>
            <div className=''>
              <label 
                forhtml='cpf' 
                className='mb-3 text-base font-medium'>
                  CPF
              </label>
              <div className='flex gap-4 items-center'>
                <input
                  name='cpf'
                  className='form-control'
                  placeholder={user.profileObj ? user.profileObj.cpf : ''}
                />
              </div>
            </div>
            <div className=''>
              <label 
                forhtml='password' 
                className='mb-3 text-base font-medium'>
                  Senha
              </label>
              <div className='flex gap-4 items-center'>
                <input
                  name='password' type='password'
                  className='form-control '
                  placeholder={user.profileObj ? user.profileObj.password : ''}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='text-xl pt-4 font-extrabold'>
          <h1>Configurações da Conta</h1>
        </div>
        <div className='border-2 border-slate-500 rounded-lg my-4'>
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
    </div>
  )
}