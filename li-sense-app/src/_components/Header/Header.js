import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import Logo from "../../_assets/img/logo.png";
import DropDownUser from "../DropDownUser/DropDownUser";

import { FaUser, FaCartPlus, FaSearch } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  return (
    <>
      <header>
        <div className="logo">
          <a
            onClick={() => {
              navigate("/");
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
            <div>
              <a
                onClick={() => {
                  setOpen(!open);
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
              <div className={`dropdown-user ${open ? "active" : "inactive"} `}>
                {!isUserLogin ? (
                  <>
                    <h3>
                      Para ter uma experiência personalizada, acesse sua conta
                    </h3>
                    <button
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Entrar
                    </button>
                    <button
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      Cadastre-se
                    </button>
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
                setIsUserLogin(!isUserLogin);
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
  );
}
