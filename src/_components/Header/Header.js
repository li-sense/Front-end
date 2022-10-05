import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className='w-full flex items-center'>
      Header
      <button className='ml-4 p-4' onClick={() => {navigate('/login')}}>
        Login
      </button>
      <button className='ml-4 p-4' onClick={() => {navigate('/')}}>
        Home
      </button>
      </div>
    </>
  );
}
