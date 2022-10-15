import React from 'react'
import './DropDownUserItens.css'

function DropDownUserItens(props) {
  return (
    <div className="DropDownUserItens">
      <i>{props.icon}</i>
      <span>{props.text}</span>
    </div>
  )
}

export default DropDownUserItens
