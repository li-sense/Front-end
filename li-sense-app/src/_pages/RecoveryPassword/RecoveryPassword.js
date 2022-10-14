import React from "react";
import RegisterNewPassword from "../../_components/RecoveryPassword/RegisterNewPassword/RegisterNewPassword";
import SendEmailRecovery from "../../_components/RecoveryPassword/SendEmailRecovery/SendEmailRecovery";
import './RecoveryPassword.css';
export default function RecoveryPassword() {
  const [isReceivedEmail, setIsReceivedEmail] = React.useState(false);
  return (
    <>
    
      <div className="container-send">
        <h1>Redefinir senha</h1>
        {
          !isReceivedEmail ?
            <div>
            <SendEmailRecovery setIsReceivedEmail={setIsReceivedEmail}/>
            
            </div>
            : <div>
            <RegisterNewPassword setIsReceivedEmail={setIsReceivedEmail}/>
            
            </div>
        }
      </div>  
        
  
     
    </>
  )
}