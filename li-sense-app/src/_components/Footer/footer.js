import React from 'react'
import './footer.css'
import Logo from '../../_assets/img/logo.png'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare
} from 'react-icons/fa'

const footer = () => {
  return (
    <>
      <div className="divider-1"></div>
      <div className="footer">
        <div className="footer-logo">
          <a>
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="footer-central">
          <p>© 2022 Todos os direitos reservados</p>
        </div>
        <div className="footer-social">
          <a>
            <FaLinkedin />
          </a>
          <a>
            <FaGithubSquare />
          </a>
          <a>
            <FaFacebookSquare />
          </a>
          <a>
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  )
}

export default footer
