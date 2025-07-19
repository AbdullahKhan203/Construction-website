import React from 'react'

export default function Button(props) {
  return (
    <div className={`bg-main ${props.stylee || ''}`}>{props.value}</div>
  )
}
