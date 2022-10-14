import React from "react";
import RegisterNewPassword from "../../_components/RecoveryPassword/RegisterNewPassword/RegisterNewPassword";
import SendEmailRecovery from "../../_components/RecoveryPassword/SendEmailRecovery/SendEmailRecovery";
export default function RecoveryPassword() {
  const [isReceivedEmail, setIsReceivedEmail] = React.useState(false);
  return (
    <>
    <div>
      <h1>Redefinir senha</h1>
      <a>oi</a>
    </div>
      {
        !isReceivedEmail ?
          <div>
          <SendEmailRecovery setIsReceivedEmail={setIsReceivedEmail}/>
          
          </div>
          : <div>
           <RegisterNewPassword setIsReceivedEmail={setIsReceivedEmail}/>
          
          </div>
      }
    </>
  )
}