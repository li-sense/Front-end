import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Logocentral from "../../_assets/img/logoredonda.png";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';

// import Logobackground from "../../_assets/img/tela6.png";
// import Logofinal from "../../_assets/img/logoc.png";

export default function Login() {
   const navigate = useNavigate();
  return (

    <div className="container-geral">
      <div className="containerTexto">
        <div className="textoLogin">
          <img className="img1" src={Logocentral} />
          <h2>Seja Bem-vindo!</h2>
          <span>"Oportunidades não surgem. É você que as cria." </span>
          <span>LI-SENSE onde você é importante.</span>
        </div>
      </div>
      <div className="telalogin">
        <div className="containerLogin">
          <h1>Login</h1>
          <form>
            <div className="mb-login">
              <span className='span-input'>E-mail</span>
              <div className='container-input'>
                <input
                  type="email"
                  className="form-control"
                  placeholder="mail@mail.com"
                />
                <HiOutlineMail size={24} className='icon' />
              </div>
            </div>
            <div className="mb-login">
              <span className='span-input'>Password</span>
              <div className='container-input'>
                <input
                  type="password"
                  className="form-control"
                  placeholder="**********"
                />
                <FaLock size={20} className='icon' />
              </div>
            </div>
            <p className="esq">Esqueceu a senha?</p>
            <button type="submit" className="btn"> Entrar</button>
          </form>
          <p className="cadastrar">
            <a onClick={() => {navigate('/register')}}>Criar uma conta</a>
          </p>
          <p className="entarg">
            <a>Ou</a>
          </p>
          <button type="submit" className="btn1">
            <div className='content-btn1'>
              <FcGoogle size={24} /> <span>Sign in with Google</span>
            </div>
          </button>
        </div>
      </div>


    </div>


  );
}