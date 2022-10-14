import React from 'react'
import './DropDownRegister.css'
import { useNavigate } from 'react-router-dom'

function DropDownRegister() {
  const navigate = useNavigate()

  return (
    <div className="DropDownRegister">
      <h3>Para ter uma experiência personalizada, acesse sua conta</h3>
      <button
        onClick={() => {
          navigate('/login')
        }}
      >
        Entrar
      </button>
      <button
        onClick={() => {
          navigate('/register')
        }}
      >
        Cadastre-se
      </button>
    </div>
  )
}

export default DropDownRegister
