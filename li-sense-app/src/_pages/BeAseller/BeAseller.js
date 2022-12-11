import LisenseContext from '../../_context/LisenseContext';
import axios from 'axios';
import './BeAseller.css';
import React from "react";

export default function BeAseller() {
  const { user } = React.useContext(LisenseContext);
  const [sellerData, setSellerDataName] = React.useState("");
  const [isErr, setIsErr] = React.useState("");
  const [sellerId, setSellerDataId] = React.useState("");
  const newSeller = async () => {
    let data = {
      identificado: sellerId,
      nome: sellerData,
    };
    const auth = localStorage.getItem("token");
    axios
      .post("https://dev.li-sense.xyz/api/v1/vendedor/", data, {
        headers: {
          Authorization: auth,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch((_err) => {
        setIsErr(_err.response.data.detail);
      });
  };
  return (
    <div className="w-screen">
      <div className='flex-row max-w-4xl mx-auto py-6'>
        <div className='text-2xl py-1 px-1 font-bold container-text'>
          <h1>Torne-se um Vendedor</h1>
        </div>
        <div className='text-xl pt-4 font-extrabold'>
          <h1>Informações do Usuário</h1>
        </div>
        <div className='panel-detail my-4'>
          <div className='grid grid-cols-6'>
            <div className='lg:col-span-4 col-span-6 p-6'>
              <div className='py-2'>
                <label 
                  forhmtl='username'
                  className='text-base font-medium'>
                    Nome do usuário
                </label>
                <input
                  name='username'
                  disabled
                  className='form-control'
                  placeholder={user.nome ? user.nome : ""}
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
                  disabled
                  className='form-control'
                  placeholder={user.email ? user.email : ""}
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
            <div className='lg:col-start-5 col-start-3 py-14 px-6'>
              <img 
                name='avatar'
                className='rounded-full w-[240px] h-[240px]'
                src={user.profileObj ? user.profileObj.imageUrl : ''}/>
            </div>
          </div>
        </div>
        <div className='panel-detail my-4 p-6'>
          <div className='text-xl pt-4 font-extrabold'>
            <h1>Informações do Vendedor</h1>
          </div>
          <div className='grid grid-cols-2 space-x-4 justify-center'>
            <div className='py-4'>
              <label 
                forhtml='cpf' 
                className='text-base font-medium'>
                  CNPJ
              </label>
              <input
                name='cpnj'
                className='form-control'
                onChange={(event) => {
                  setSellerDataId(event.target.value);
                }}
              />
            </div>
            <div className='py-4'>
              <label 
                forhtml='password' 
                className='text-base font-medium'>
                  Nome da Empresa
              </label>
              <input
                name='password'
                className='form-control'
                onChange={(event) => {
                  setSellerDataName(event.target.value);
                }}
              />
            </div>
          </div>
          <div>{isErr && <p>{isErr}</p>}</div>
          <div className='flex justify-center'>
            <button className="submit" onClick={() => newSeller()}>Torne-se um Vendedor</button>
          </div>
        </div>
      </div>
    </div>
  )
}