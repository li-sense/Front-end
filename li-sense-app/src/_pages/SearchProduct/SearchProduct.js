import React from 'react'
import './searchproduct.css'
import ProductComponent from '../../_components/Search/Product'
import Search from '../../_components/Search/Search'

export default function SearchProduct() {
  return (
    <>
      <div className="search-product">
        <h1>
          Resultados para: <span>TV</span>
        </h1>
        <div className="serarch-section">
          <div className="search-product-left">
            <Search />
          </div>
          <div className="search-product-right">
            <ProductComponent />
            <ProductComponent />
          </div>
        </div>
      </div>
    </>
  )
}
