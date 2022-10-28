import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Checkout() {
  const navigate = useNavigate()
  return (
    <>
    <div className='flex flex-col'>
      corpo do checkout
      <button
      onClick={() => {
        navigate('/cart/payment')
      }}
      >
        Continuar
      </button>
    </div>
    </>
  )
}