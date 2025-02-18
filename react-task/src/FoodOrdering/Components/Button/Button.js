import React from 'react'

export const Button = (props) => {
  return (
    <button onClick={props.handle_click}>{props.btn_name}</button>
  )
}
