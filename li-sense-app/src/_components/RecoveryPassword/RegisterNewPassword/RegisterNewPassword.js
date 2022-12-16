import React, { useState } from "react";
import './RegisterNewPassword.css';
import { FaLock } from "react-icons/fa";

export default function RegisterNewPassword(props) {
  const { setIsReceivedEmail } = props;
  const [isShown, setIsSHown] = useState(false);
  const togglePasswordCad = () => {
    setIsSHown((isShown) => !isShown);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-center">
     <div className="redefinir w-[80%]">
     <label htmlFor="send-red" className='span-send-redefinir'>Digite nova senha</label>
             <div className="input-wrapper-campo">
                <input
                  id="send"
                  type={isShown ? "text" :"password"}
                  className="form-control-redf"
                  placeholder="nova senha"
                  checked={isShown}
                  
                />
                <i className="input-icon12"><FaLock size={20} /></i>

              </div>
               <div className="input-wrapper-campo">
                <input
                  id="send"
                  type={isShown ? "text" :"password"}
                  className="form-control-redf"
                  placeholder="repetir senha"
                  checked={isShown}
                />
             
                <i className="input-icon12"><FaLock size={20}/></i>

              </div>
              <div className="checkbox-container">
                
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked={isShown}
                    onChange={togglePasswordCad}
                  />
                  <label htmlFor="checkbox">Show password?</label>
                </div>
        <button onClick={() => { setIsReceivedEmail(false) }} className='btn-redefinir'>
          Redefinir senha
        </button>
     </div>
      </div>
      
    </>
  )
}