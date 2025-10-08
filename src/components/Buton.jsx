import React from 'react'

export default function Buton(props) {
  return (
    <button type={props.type} onClick={props.onClick} className={`${props.stylee || ''}`}>{props.value}</button>
  )
}
