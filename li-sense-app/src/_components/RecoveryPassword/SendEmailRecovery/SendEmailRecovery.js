import React from "react";

export default function SendEmailRecovery(props) {
  const { setIsReceivedEmail } = props
  return (
    <>
    <div className="flex flex-col">
      Componente de envio do email
      <button onClick={() => { setIsReceivedEmail(true) }} className='border p-4 m-4 w-48'>
              Enviar link
            </button>
    </div>
    </>
  )
}