import React from "react";
import "./UserConfig.css";
import LisenseContext from '../../_context/LisenseContext';

export default function UserConfig() {
  const { user } = React.useContext(LisenseContext);

  return (
    <div className="w-screen">
      <div className='text-2xl py-1 px-1 font-bold container-text'>
        <h1>Configurações de Usuário</h1>
      </div>
      <div className='flex-row max-w-4xl mx-auto py-6'>
        <div className='panel-detail my-4'>
          <div className='text-xl pt-4 font-extrabold'>
            <h1>Editar Foto de Perfil</h1>
          </div>
          <div className='flex flex-row items-center justify-center space-x-12 p-4'>
            <div>
              Para adicionar uma foto de perfil basta clicar na foto
            </div>
            <img 
              name='avatar' 
              className='rounded-full w-[360px] h-[360px]'
              src={user.profileObj ? user.profileObj.imageUrl : ''} 
            />
          </div>
        </div>
        <div className='panel-detail my-4'>
          <div className='text-xl pt-4 font-extrabold'>
            <h1>Editar Informações</h1>
          </div>
          <div className='p-6 grid grid-cols-2 gap-4'>
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
                className='text-base font-medium'>
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
          <div className='p-6 grid grid-cols-2 gap-4'>
            <div>
              <label 
                forhtml='password' 
                className='text-base font-medium'>
                  Senha
              </label>
              <div className='flex items-center'>
                <input
                  name='password' type='password'
                  className='form-control '
                  placeholder={user.profileObj ? user.profileObj.password : ''}
                />
              </div>
            </div>
            <div>
              <label 
                forhtml='cpf' 
                className='text-base font-medium'>
                  CPF
              </label>
              <div className='grid grid-cols-2 gap-4 items-center'>
                <input
                  name='cpf'
                  className='form-control'
                  placeholder={user.profileObj ? user.profileObj.cpf : ''}
                />
                <button className="submit">Salvar alterações</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
