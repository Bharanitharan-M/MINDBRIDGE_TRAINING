import React from 'react'
import { Input } from './Input'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

export const Form = (props) => {
  const navigate = useNavigate();
  return (
    <form action="">
        <div className='form_fileds'>
        {props.login_field.map(ele=>
            <Input filed_att={ele} input_type={props.handle_input} errmsg={props.errmsg}/>
        )}
        </div>
        <div>
        <Button btn_name={"Submit"} handle_click={props.handle_click}/>
        </div>
    </form>
  )
}
