import React from 'react'
import { Button } from '../../Component/Button/Button'
export const Home_brands = () => {
    return (
        <div className='position-relative'>
            <img src="https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1891,h_706,al_r,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png" alt="" width={"100%"} />
            <div className='position-absolute product_des'>
                <div className='mb-3'>
                    <span className='bg-danger ps-2 pe-2 text-white fs-5'>Best Prices</span>
                </div>
                <div className='pb-2' style={{ width: "500px" }}>
                    <span className='fw-bold lh-sm' style={{ fontSize: "60px" }} >Incredible Prices on All Your Favorite Items</span>
                </div>
                <div className='pb-3 py-2'>
                    <span className='fw-normal text-secondary fs-5'>Get more for less on selected brands</span>
                </div>
                <div className='py-3'>
                    <Button btn_name="Shop Now" class="offer" />
                </div>
            </div>
        </div>
    )
}
