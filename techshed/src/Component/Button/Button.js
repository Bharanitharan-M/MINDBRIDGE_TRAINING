import React from 'react'

export const Button = (props) => {
  return (
    <button className={props.class} onClick={props.click}>{props.btn_name}</button>
  )
}
