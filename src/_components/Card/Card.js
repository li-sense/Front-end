import React from 'react';
import './Card.css'
import Image from "./img/engine.jpg";
import Arrow from "./img/arrow.png"
import Star from "./img/star.png"

export default function Card(){
  return (
    <>
      <div id="content">
        <div class="card" id="one">
          <div id='fileIcon'></div>
          <img src={Image} class="view" alt="" />

          <p class="title">Nome</p>
          <p class="price">R$200,00</p>
          <p class="desc">
            Lorem ipsum dolor sit aconsectetur adipisicing elit. Liobcaecati
            eligendi tempora nesciunt.
          </p>
          <div class="arrow">
            <img src={Arrow} id="ar"></img>
            <img src={Arrow} id="arr"></img>
          </div>
          {/* <img id="fav" src={Star}></img> */}


        </div>
      </div>
    </>
  );
}