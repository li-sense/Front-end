import React from "react";
import "./DropDownUser.css";
import DropDownItens from "./DropDownUserItens";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { AiFillSetting, AiFillDollarCircle } from "react-icons/ai";
import LisenseContext from "../../_context/LisenseContext";

export default function DropDownUser(props) {
  const { isSeller } = React.useContext(LisenseContext)
  const navigate = useNavigate();

  return (
    <>
      <ul className="DropDownUser">
        <h2>Sua conta</h2>
        <li
          onClick={() => {
            navigate("/profile");
          }}
        >
          <DropDownItens icon={<FaUser />} text={"Meu perfil"} />
        </li>
        <li
          onClick={() => {
            navigate("/profile/config");
          }}
        >
          <DropDownItens icon={<AiFillSetting />} text={"Configurações"} />
        </li>
       {
        !isSeller &&
        <li
        onClick={() => {
          navigate("/profile/beAseller");
        }}
      >
        <DropDownItens
          icon={<AiFillDollarCircle />}
          text={"Torne-se um vendendor"}
        />
      </li>
       }
        {
          isSeller &&
          <li
          onClick={() => {
            navigate("/product/creatproduct");
          }}
        >
          <DropDownItens
            icon={<AiFillDollarCircle />}
            text={"Criar produto"}
          />
        </li>
        }
      
        <li
          onClick={() => {
            navigate("#");
          }}
        >

          <DropDownItens icon={<MdOutlineLogout />} text={"Sair da conta"} />
        </li>
      </ul>
    </>
  );
}
