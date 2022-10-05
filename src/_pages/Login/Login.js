import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col'>
        tela de login
        <button className='p-4 border w-36' onClick={() => {navigate('/register')}}>
          cadastro
        </button>
      </div>
    </>
  )
}