import React from 'react'
import { Components } from '../../_components/Components'

import './Home.css'
import { data } from '../../FakeData'
export default function Home() {
  return (
    <>
      <div className="container-home">
        <div className="">
          <Components.Filters />
        </div>
        <div className="cards">
          {data.map((_value, key) => (
            <Components.Card data={_value} key={key} />
          ))}
        </div>
        <button className="filter">Ver mais</button>
      </div>
    </>
  )
}
