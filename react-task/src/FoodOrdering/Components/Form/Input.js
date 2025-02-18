import React from 'react'

export const Input = (props) => {
  return (
    <div className="form-group col-md-12">
      <label htmlFor={props.filed_att.id}>{props.filed_att.label_name}</label>
      <input type={props.filed_att.type} className="form-control" id={props.filed_att.id} placeholder={props.filed_att.placeholder} name={props.filed_att.id} onChange={props.input_type}/>
      <small>{props.errmsg[props.filed_att.id]}</small>
    </div>
  )
}
