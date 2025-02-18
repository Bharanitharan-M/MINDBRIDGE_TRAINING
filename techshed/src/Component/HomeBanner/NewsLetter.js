import React from 'react'
import { Form } from '../Form/Form'

export const NewsLetter = () => {
    const form_field = [{type:"mail", label_name: "Email*", id: "subcribe_mail"}, {type: "checkbox", label_name: "Yes, subscribe me to your newsletter", id: "subcribe_check"}]
  return (
    <div className='py-2 px-5 newsletter text-white'>
        <div className='shadow-lg p-5' style={{backgroundColor: "var(--primary-btn-color)"}}>
            <div className='text-center'>
            <h2 className='fw-bold pb-3'><span>Newsletter</span></h2>
            <p className='fs-6 fw-lighter'><span>Sign up to receive updates on new arrivals and special offers</span></p>
            
            </div>
            <div className='pt-3'>
                <Form field={form_field} />
            </div>
            
        </div>
    </div>
  )
}
