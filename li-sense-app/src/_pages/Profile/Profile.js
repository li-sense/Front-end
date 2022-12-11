import React, { useEffect, useState } from 'react';
import './Profile.css';
import LisenseContext from '../../_context/LisenseContext';
import { useNavigate } from 'react-router-dom';
export default function Profile(props){
  const navigate = useNavigate();
  const { user } = React.useContext(LisenseContext);

  return (
    <div className="w-screen">
      <div className='flex-row max-w-4xl mx-auto py-6'>
        <div className='panel-detail my-4'>
          <div className='text-xl font-extrabold pt-3 px-5'>
            <h1>Informações Privadas</h1>
          </div>
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
              {/*Componente da foto de perfil*/}
              <label forhtml='avatar' className='mb-3 block text-base font-medium'>Foto de Perfil</label> 
              <div>
                <label className="profile-picture" for="profile-picture-input" tabIndex="0">
                  <span className="profile-picture-image">Escolher nova foto</span>
                </label>
                <input
                  onchange="readURL(this);"
                  type="file"
                  name="profile-picture-input"
                  id="profile-picture-input"
                  multiple
                ></input>
              </div>
            </div>
          </div>
          <div className='pb-8 px-5'>
            <div className='grid grid-cols-2 gap-4 px-5'>
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
        </div>
        <div className='panel-detail my-4'>
          <div className='text-xl font-extrabold pt-3 px-5'>
            <h1>Informações Públicas</h1>
          </div>
          <div className='grid grid-cols-5 gap-4 py-4 px-5'>
            <div className='col-span-2'>
              <label>Nome de Usuário</label>
              <input
                name='username'
                className='form-control'
                placeholder={user.profileObj ? user.profileObj.name : ''}
              />
            </div>
            <div className='col-span-3'>
              <label>Descrição Pessoal</label>
              <textarea 
                name='description'
                rows='5'
                className='form-control block w-full text-sm'
              />
            </div> 
          </div> 
        </div>
        <div className='panel-detail my-4'>
          <div className='text-xl font-extrabold pt-3 px-5'>
            <h1>Informações da Empresa</h1>
          </div>
          <div className='grid grid-cols-2 gap-4 px-5'>
            <div>
              <label 
                forhtml='nomemepresa' 
                className='mb-3 text-base font-medium'>
                  Nome da Empresa
              </label>
              <div className='flex gap-4 items-center'>
                <input
                  disabled
                  name='nomemepresa'
                  className='form-control'
                  placeholder={'Torne-se um Vendedor'}
                />
              </div>
            </div>
            <div>
              <label 
                forhtml='cnpj' 
                className='mb-3 text-base font-medium'>
                  CNPJ
              </label>
              <div className='flex gap-4 items-center'>
                <input
                  disabled
                  name='cnpj'
                  className='form-control'
                  placeholder={'Torne-se um Vendedor'}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center py-4'>
            <button className='submit' onClick={() => {navigate("/profile/BeAseller");}}>Torne-se um Vendedor</button>
          </div>         
        </div>
      </div>
    </div>
  )
}