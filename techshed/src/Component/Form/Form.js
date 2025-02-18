import React from 'react'
import { Button } from '../Button/Button'

export const Form = (props) => {
    return (
        <div className='container d-flex justify-content-center'>
        <form className='row g-4 align-items-end'>
            <div className="col-10">
                <label for={props.field[0].id} className="form-label fs-6">{props.field[0].label_name}</label>
                <input type={props.field[0].type} className="form-control bg-transparent px-3 rounded-pill" id={props.field[0].id} style={{padding: "12px 0px"}} />
            </div>
            <div className="col-2">
                <Button btn_name="Subscribe" class="subscribe_btn" />
            </div>
            <div className="col-12 align-items-center">
                <div className="form-check">
                    <input className="form-check-input bg-transparent  border-warning rounded-0" type="checkbox" id={props.field[1].id} style={{accentColor: "black"}}/>
                        <label className="form-check-label fs-6 pt-1" for={props.field[1].id}>
                            {props.field[1].label_name}
                        </label>
                </div>
            </div>
        </form>
        </div>
    )
}
