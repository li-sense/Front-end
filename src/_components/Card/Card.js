import React from 'react';
import './Card.css'
import Image from "./img/engine.jpg";
import Arrow from "./img/arrow.png";
import { IconContext } from "react-icons";
import { VscFile } from "react-icons/vsc";


export default function Card(){
  return (
  <IconContext.Provider value={{ color: 'white', size: '12px'}}>
    <div id="content">
      <div class="card" id="one">
        <div id='icon'>
          <div class='wrapper'>
          < VscFile /> 
          </div>
        </div> 
        <img src={Image} class="view" alt="" />

        <p class="title">Nome</p>
        <p class="price">R$200,00</p>
        <p class="desc">
          Lorem ipsum dolor sit aconsectetur adipisicing elit. Liobcaecati
          eligendi tempora nesciunt.
        </p>
        <div class="arrows">
          <img src={Arrow} id="upperArrow"></img>
          <img src={Arrow} id="lowerArrow"></img>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  );
}