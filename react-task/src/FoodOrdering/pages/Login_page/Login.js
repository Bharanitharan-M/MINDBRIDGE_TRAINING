import React, { useState } from 'react'
import { Form } from '../../Components/Form/Form'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as call_action from '../../Redux/action/callAction'
export const Login = () => {
  const dispatch = useDispatch();
  const user_details = useSelector((state) => state.all_data.user_data)
  const [user_input, setUser_input] = useState();
  const [err, setErr] = useState([]);
  const navigate = useNavigate();
  const login_field = [{type: "text",id: "user_name", placeholder: "User Name", label_name: "Enter User Name"}, {type: "password", id: "user_password", placeholder:"xxxxxx", label_name: "Enter the Password"}]
  const handle_click = (event) => {
    event.preventDefault();
    const check_user = user_details.filter(user_detail => user_detail.userAccName === user_input.user_name && user_detail.password === user_input.user_password)
      if(check_user.length){
        dispatch(call_action.sign_in(check_user[0].userName))
        setErr([]);
        navigate("/")
      }
      else{
        setErr({user_name: "User name incorrect", user_password: "User password incorect"})
      }
   
  }

  const handle_input = (e) => {
    setUser_input({...user_input, [e.target.name]: e.target.value}) 
  }
  return (
    <div className='login_form'>
     <div className='new_user_style'>
      <div>
      <h6 className='col'>New User?</h6>
      </div>
      <div>
      <Link to="/sign_up">
            <h6>Click here..</h6>
      </Link>
      </div>
      </div>
    <h4>Login In..</h4>
    <Form login_field={login_field} handle_click={handle_click} handle_input={handle_input} errmsg={err}/>
    </div>
  )
}
