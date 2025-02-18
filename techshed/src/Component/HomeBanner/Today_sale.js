import React from 'react'
import { Seller_card } from './Seller_card'
import { Best_price } from './Best_price'
import { Button } from '../Button/Button'

export const Today_sale = () => {
  return (
    <div className='px-5 py-4 today'>
        <div className='shadow-lg' style={{backgroundColor: "white"}}>
            <div className='conatiner'>
                <div className='row align-items-center offer_details'>
                    <div className='col-5' style={{paddingLeft: "80px"}}>
                       <p className='fs-5' ><span className='bg-danger px-3 py-1 text-white'>Today's Special</span></p>
                       <p className='fs-2 fw-bold'><span>Best Arial View in Town</span></p>
                       <p className='fs-1 text-uppercase fw-bold' ><span style={{color: "var(--primary-btn-color)"}}>30%</span> off</p>
                       <p className='fs-2 fw-bold'><span>on professional camera drones</span></p>
                       <p className='fs-6 lh-base fw-light' style={{color: "gray"}}><span>Limited quantities<br /> See product detail for availability</span> </p>
                       <div className='pt-4'>
                        <Button btn_name="Shop" class="offer" />
                       </div>
                    </div>
                    <div className='col-7'>
                        <Best_price sorce="https://static.wixstatic.com/media/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png/v1/fill/w_1791,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
