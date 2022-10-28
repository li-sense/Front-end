import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'
import Logo from '../../_assets/img/logo.png'
import DropDownRegister from '../DropDown/DropDownRegister'
import DropDownUser from '../DropDown/DropDownUser'
import { FaUser, FaCartPlus, FaSearch } from 'react-icons/fa'

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [isUserLogin, setIsUserLogin] = useState(false)

  let menuRef = useRef()

  useEffect(() => {
    let handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
        console.log('menuRef.current')
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const goToCart = () => {
    navigate('/cart');
    setIsUserLogin(!isUserLogin);
  }

  return (
    <>
      <header>
        <div className="logo">
          <a
            onClick={() => {
              navigate('/')
            }}
          >
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="col-search">
          <form action="#">
            <div className="search-box">
              <input type="search" placeholder="Faça sua busca" />
              <button type="submit">
                <i>
                  <FaSearch />
                </i>
              </button>
            </div>
          </form>
        </div>
        <div className="col-cart">
          <nav>
            <div ref={menuRef}>
              <a
                onClick={() => {
                  setOpen(!open)
                }}
              >
                <i>
                  <FaUser />
                </i>
                {!isUserLogin && (
                  <>
                    <span>
                      Olá, faça seu login <br />
                      ou cadastre-se
                    </span>
                  </>
                )}
              </a>
              <div className={`dropdown-user ${open ? 'active' : 'inactive'} `}>
                {!isUserLogin ? (
                  <>
                    <DropDownRegister />
                  </>
                ) : (
                  <>
                    <DropDownUser />
                  </>
                )}
              </div>
            </div>
            <div
              className="cart"
              onClick={() => {
                goToCart()
              }}
            >
              <i>
                <FaCartPlus />
              </i>
              <span>Carrinho</span>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
