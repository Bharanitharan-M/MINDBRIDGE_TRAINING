import React from 'react'
import { Button } from '../../Component/Button/Button'
export const Home_delas = () => {
    return (
        <div className='px-5 py-4'>
            <div className='d-flex justify-content-between'>
                <div className='position-relative'>
                    <img src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_870,h_585,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg" alt="" width={"100%"} className='pe-5' />
                    <div className='position-absolute deals text-white'>
                        <h2> <span className='fs-5 fw-normal'>Holiday Deals</span></h2>
                        <p><span className='fw-bold' style={{ fontSize: "60px ", lineHeight: "normal" }}>Up to <br />30% off</span></p>
                        <p className='pb-3'><span className='fs-5'>Selected Smartphones Brands</span></p>
                        <Button btn_name="Shop" class="deal" />
                    </div>
                </div>
                <div className='position-relative'>
                    <img src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_870,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg" alt="" width={"100%"} />
                    <div className='position-absolute deals text-white'>
                        <h2> <span className='fs-5 fw-normal'>Jsut In</span></h2>
                        <p><span className='fw-bold' style={{ fontSize: "60px ", lineHeight: "normal" }}>Take Your <br />Sound <br />AnyWhere</span></p>
                        <p className='pb-3'><span className='fs-5'>Top Headphone Brands</span></p>
                        <Button btn_name="Shop" class="deal" />
                    </div>
                </div>
            </div>
        </div>
    )
}
