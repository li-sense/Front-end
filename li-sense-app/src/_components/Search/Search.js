import React from 'react'
import './search.css'

export default function Search() {
  return (
    <>
      <div className="search">
        <h1>Filtrar por</h1>
        <div className="search-categorias">
          <h2>Categorias</h2>
          <ul>
            <li>
              <a>Categoria 01</a>
            </li>
            <li>
              <a>Categoria 02</a>
            </li>
            <li>
              <a>Categoria 03</a>
            </li>
          </ul>
        </div>
        <div className="search-price">
          <h2>Preço</h2>
          <ul>
            <li>
              <a>Até $289 (195)</a>
            </li>
            <li>
              <a>De $290 a $389 (188)</a>
            </li>
            <li>
              <a>De $390 a $519 (184)</a>
            </li>
            {/* <li>
              <a>De $520 a $689 (191)</a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  )
}
