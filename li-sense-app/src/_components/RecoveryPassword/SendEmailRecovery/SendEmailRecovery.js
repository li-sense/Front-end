import React from "react";
import "./styles.css";
import axios from "axios";
import { FiMail } from "react-icons/fi";

export default function SendEmailRecovery(props) {
  const { setIsReceivedEmail } = props;
  const [email, setEmail] = React.useState("");

  const recovery = () => {
    const data = {
      email: [email],
    };

    axios
      .post(
        "https://dev.li-sense.xyz/api/v1/usuarios/recuperacao-senha",
        data,
        {}
      )
      .then(function (response) {
        alert(`Foi enviado um link de recuperação para o email ${email}`);
      })
      .catch((_err) => {
        alert(_err.response.data.detail);
      });
  };

  return (
    <>
      <div className="card-link">
        <label htmlFor="send" className="span-send-email">
          E-mail para recuperação de senha
        </label>
        <div className="input-wrapper">
          <input
            id="send"
            type="email"
            className="form-control"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="mail@mail.com"
          />
          <span className="input-icon">
            <FiMail size={24} className="icon-register1" />
          </span>
        </div>

        <button
          className="btn-link"
          onClick={() => {
            recovery();
          }}
        >
          Enviar link
        </button>
      </div>
    </>
  );
}
