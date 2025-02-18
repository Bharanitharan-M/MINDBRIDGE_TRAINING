import React from 'react'
import { Button } from '../Button/Button'
import { Best_price } from '../HomeBanner/Best_price'

export const HelpCenter = () => {
    return (
        <div className='row m-0 p-0'>
            <div className='col-6 bg-black text-white p-0 h-100'>
                <div style={{padding: "22.2%", }}>
                    <p className="fs-2">Need Help? Check <br /> Out Our Help Center</p>
                    <p className="fs-6">
                        I'm a paragraph. Click here to add your own text <br /> and edit me. Let your users get to know you.
                    </p>
                    <div className="py-3">
                        <Button btn_name="Go to Help Center" class="help_btn" />
                    </div>
                </div>
            </div>
            <div className='col-6 p-0'>
                <Best_price sorce="https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_1040,h_556,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg" />
            </div>
            
        </div>
    )
}
