import React, { useEffect, useState } from 'react'
import './Profile.css'
import Logocentral from '../../_assets/img/logoredonda.png'
import LisenseContext from '../../_context/LisenseContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FiMail, FiGrid, FiCheckCircle, FiBox } from 'react-icons/fi'
import { AiFillSetting } from 'react-icons/ai'
export default function Profile(props) {
  const { user } = React.useContext(LisenseContext)

  const navigate = useNavigate()
  React.useEffect(() => {
    !user.nome && navigate('/')
  })

  return (
    <>
      <div className="profile-user">
        <div className="container-profile">
          <div>
            <img
              src="https://static.kabum.com.br/conteudo/temas/001/imagens/k5/images/profile_ninja.png"
              alt="Ninja"
            />
          </div>
          <div className="profile-name">
            <span>Bem-vindo, {user.nome ? user.nome : ''}</span>
            <span>
              <FiMail className="icon-settings" />
              {user.email ? user.email : ''}
            </span>
          </div>
          <div className="profile-setting">
            <AiFillSetting
              onClick={() => {
                navigate('/profile/config')
              }}
            />
          </div>
        </div>
        <div className="container-empresa">
          <div>
            <label>Nome da Empresa</label>
            <input
              disabled
              name="password"
              type="password"
              className="form-control "
              placeholder={'Torne-se um Vendedor'}
            />
          </div>
          <div>
            <label>CNPJ da Empresa</label>
            <input
              disabled
              name="cnpj"
              className="form-control"
              placeholder={'Torne-se um Vendedor'}
            />
          </div>
        </div>
      </div>

      <div className="container-atalhos">
        <h1>
          <FiGrid />
          Atalhos
        </h1>
      </div>
      <div className="cards-atalhos">
        <div
          className="card-atalho"
          onClick={() => {
            navigate('/profile/config')
          }}
        >
          <AiFillSetting />
          <span>Configurações</span>
        </div>
        <div
          className="card-atalho"
          onClick={() => {
            navigate('/profile/beAseller')
          }}
        >
          <FiCheckCircle />
          <span>Torne-se um vendendor</span>
        </div>
        <div
          className="card-atalho"
          onClick={() => {
            navigate('/product/creatproduct')
          }}
        >
          <FiBox />
          <span>Criar produto</span>
        </div>
      </div>
    </>
  )
}
