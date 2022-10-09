import React from 'react';
import './Card.css'
import Arrow from "./img/arrow.png";
import { VscFile } from "react-icons/vsc";


export default function Card(props) {
  const { data } = props;
  return (
    <>
      <div className='flex flex-col card overflow-hidden m-4'>
        <div className='w-full flex justify-end items-center'>
          <div className='vsicon flex items-center justify-center'>
            < VscFile size={20} />
          </div>
        </div>
        <div className='view flex flex-col items-center'>
          <img src={data.url} class="img" alt="" />
          <div className='flex items-center'>
            <div className='w-[80%] ml-4'>
              <p class="text-2xl text-white">{data.name}</p>
              <p class="price">{data.price}</p>
              <p class="desc">
                {data.description}
              </p>
            </div>
            <div class="arrows h-full w-[20%] -mt-8 -ml-8">
              <img src={Arrow} className="arrow"></img>
              <img src={Arrow} className="arrow"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


/*
<IconContext.Provider value={{ color: 'white', size: '12px'}}>
    <div id="content" style={{backgroundImage: ''}}>
      <div class="card" id="one">
        <div id='icon'>
          <div class='wrapper flex items-center mt-2'>
          < VscFile size={30}/> 
          </div>
        </div> 
        <img src={Image} class="view" alt="" />

        <p class="title">Nome</p>
        <p class="price">R$200,00</p>
        <p class="desc">
          Lorem ipsum dolor sit aconsectetur adipisicing elit. Liobcaecati
          eligendi tempora nesciunt.
        </p>
       
      </div>
    </div>
    </IconContext.Provider>

 <div class="arrows">
        <img src={Arrow} id="upperArrow"></img>
          <img src={Arrow} id="lowerArrow"></img>
        </div>
*/