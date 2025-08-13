import React from 'react'

export default function Input(props) {
  return (
    <>
    <input onChange={props.onChange} className={props.stylee} type={props.type} width={props.width}  placeholder={props.placeholder} name={props.name} value={props.value} />
    </>
  )
}
