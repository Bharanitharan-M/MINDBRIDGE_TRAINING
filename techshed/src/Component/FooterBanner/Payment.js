import React from 'react'
import { Image } from '../Image/Image'

export const Payment = () => {
  return (
    <div className='p-5'>
        <div className='p-5'>
        <hr />
        <div className='pt-4 text-center'>
            <p><span>We accept the following paying methods</span></p>
        </div>
        <div className='d-flex justify-content-center py-5'>
            <div className='pe-5'>
                <Image source="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_69,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visa.png"/>
            </div>
            <div className='pe-5'>
                <Image source="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-mastercard%403x.png" />
            </div>
            <div className='pe-5'>
                <Image source="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_69,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-amex%403x.png" />
            </div >
            <div className='pe-5'>
                <Image source="https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-chinaunionpay%403x.png"/>
            </div>
            <div className='pe-5'>
                <Image source="https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-jcb%403x.png"/>
            </div>
            <div className='pe-5'>
                <Image source="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_65,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diners.png" />
            </div>
            <div className='pe-5'>
                <Image source="https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_69,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Discover.png"/>
            </div>
            <div className='pe-5'>
                <Image source="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_69,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PayPal.png"/>
            </div>
        </div>
        </div>
    </div>
    
  )
}
