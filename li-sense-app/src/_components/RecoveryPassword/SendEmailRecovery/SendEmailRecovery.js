import React from "react";
import './styles.css';
import {FiMail} from 'react-icons/fi' ;

export default function SendEmailRecovery(props) {
   const { setIsReceivedEmail } = props
  return (
    <>
    
      <form className="card-link">
            
              <label htmlFor="send" className='span-send-email'>E-mail para recuperação de senha</label>
             <div className="input-wrapper">
                <input
                  id="send"
                  type="email"
                  className="form-control"
                  placeholder="mail@mail.com"
                />
                <span className="input-icon"><FiMail size={24} className='icon-register1'/></span>
            
              </div>

        <button  className="btn-link" onClick={() => { setIsReceivedEmail(true) }}>
            Enviar link
        </button>
    
      </form>
      
      
      
   
    </>
  )
}