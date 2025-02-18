import React, { useState } from 'react'
import { Form } from '../../Components/Form/Form'
import './Sign_up.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as call_action from '../../Redux/action/callAction'

export const Sign_up = () => {
    const form_filed = [{ type: "text", id: "name", placeholder: "Name", label_name: "Enter Name" }, { type: "text", id: "user_name", placeholder: "User Name", label_name: "Enter User Name" }, { type: "mail", id: "user_mail", placeholder: "Mail id..", label_name: "Enter The Mail" }, { type: "number", id: "user_number", placeholder: "1234567890", label_name: "Enter the Phone Number" }, { type: "password", id: "user_password", placeholder: "xxxxxx", label_name: "Enter the Password" }, { type: "password", id: "cnfrm_password", placeholder: "xxxxxx", label_name: "Enter Re-Password" }]
    const [user_input, SetUser_input] = useState([]);
    const [userErr, SetuserErr] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user_details = useSelector((state) => state.all_data.user_data)
    const handleInput = (e) => {
        SetUser_input({ ...user_input, [e.target.name]: e.target.value });
    }
    function name_validate(name_value) {
        let regex = /[0-9]/
        if(!name_value){
            return "Name is required"
        }
        else if (regex.test(name_value)) {
            return "Name should Contain Number"
        }
        else if (name_value.length < 3) {
            return "Name should be more than 3 letter"
        }
    }
    function username_validate(user_name) {
        let regex = /[A-Z]{1,}[a-z]{1,}[0-9]{0,}[(@#!]{1,}/
        if(!user_name){
            return "User Name is required"
        }
        if (!regex.test(user_name)) {
            return "User name is not valid.."
        }
        if(user_details.some(user_detail => user_detail.userAccName === user_name)){
            return "User name is already exist.."
        }
      
    }
    function usermail_validate(user_mail){
        
        let regex = /^(?=[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!user_mail){
            return "Mail is required"
        }
        else if(!regex.test(user_mail)){
            return "Mail is not Valid.."
        }
        if(user_details.some(user_detail => user_detail.mailid === user_mail)){
            return "Mail already exist.."
        }
    }
    function usernumber(user_number){
        if(!user_number){
            return "Number is required"
        }
      
        else if(user_number.length != 10){
            return "Number is not valid..."
        }
    }
    function user_password(user_password){
        let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if(!user_password){
            return "Password is required"
        }
        else if(!regex.test(user_password)){
            return "Password is not strong.."
        }
    }
    function user_cnf_password(user_password){
        if(!user_password){
            return "Re-enter password is required"
        }
        else if(user_password !== user_input.user_password){
            return "Password not match"
        }
    }
    const handle_click = (event) => {
        event.preventDefault();
        let name_value = name_validate(user_input.name)
        let user_name_value = username_validate(user_input.user_name);
        let mail_value = usermail_validate(user_input.user_mail);
        let number_value = usernumber(user_input.user_number)
        let password_value = user_password(user_input.user_password)
        let cnfrm_value = user_cnf_password(user_input.cnfrm_password);
        if(name_value || user_name_value || mail_value || number_value || password_value || cnfrm_value)
            SetuserErr({name: name_value, user_mail: mail_value, user_name: user_name_value, user_number: number_value, user_password: password_value, cnfrm_password: cnfrm_value});
        SetuserErr([]);
        dispatch(call_action.new_user(user_input));
        alert("Account Created Successfull! Login First....")
        navigate("/login")

    }
    return (
        <div className='form_filed'>
            <div className='log_in'>
                <div>
                    <h6>Already have an account</h6>
                </div>
                <div>
                    <Link to="/login">
                        <h6>Click here...</h6>
                    </Link>
                </div>
            </div>
            <h5>Sign Up..</h5>
            <Form login_field={form_filed} handle_input={handleInput} handle_click={handle_click} errmsg={userErr}/>
        </div>
    )
}
