import React from "react";


export default function RegisterNewPassword(props) {
  const { setIsReceivedEmail } = props
  return (
    <>
      <div className="flex flex-col">
        Componente de registro de nova senha
        <button onClick={() => { setIsReceivedEmail(false) }} className='border p-4 m-4 w-48'>
          Redefinir senha
          
        </button>
      </div>
    </>
  )
}