import LisenseContext from '../../_context/LisenseContext';
import React from "react";

export default function BeAseller() {
  const { user } = React.useContext(LisenseContext);

  return (
    <div className="w-screen">
      <div className='text-2xl py-1 px-1 font-bold container-text'>
        <h1>Torne-se um Vendedor</h1>
      </div>
      <div className='flex-row max-w-4xl mx-auto py-6'>
        <div className='text-xl pt-4 font-extrabold'>
          <h1>Informações do Usuário</h1>
        </div>
        <div className='border-2 border-slate-500 rounded-lg my-4'>
          <div className='grid grid-cols-6'>
            <div className='lg:col-span-4 col-span-6 p-6'>
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
              </div>
              <div className='grid grid-cols-2 space-x-4 justify-center'>
                <div className='py-4'>
                  <label 
                    forhtml='cpf' 
                    className='text-base font-medium'>
                      CPF
                  </label>
                  <input
                    name='cpf'
                    className='form-control'
                    placeholder={user.profileObj ? user.profileObj.cpf : ''}
                  />
                </div>
                <div className='py-4'>
                  <label 
                    forhtml='password' 
                    className='text-base font-medium'>
                      Senha
                  </label>
                  <input
                    name='password'
                    className='form-control'
                    placeholder={user.profileObj ? user.profileObj.password : ''}
                  />
                </div>
              </div>
            </div>
            <div className='lg:col-start-5 col-start-3 py-12 px-6 '>
              <img 
                name='avatar'
                className='rounded-full w-[240px] h-[240px]'
                src={user.profileObj ? user.profileObj.imageUrl : ''}/>
            </div>
          </div>
        </div>
        <div className='text-xl pt-4 font-extrabold'>
          <h1>Informações do Vendedor</h1>
        </div>
        <div className='border-2 border-slate-500 rounded-lg my-4'>
          <div className='p-6 max-w-sm mx-auto'>
            <div className='py-2'>

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