import React from 'react'

export const Home_features = () => {
  return (
    <div className='px-5 py-4'>
    <div className='shadow-lg  d-flex justify-content-between p-5' style={{backgroundColor: "white"}}>
        <div className='d-flex align-items-center p-4'>
            <div>
            <i class="fa-solid fa-motorcycle fs-3" />
            </div>
            <div className='ps-4 fs-5 fw-bold'>
            <p className='m-0'><span>Curb-side</span></p>
            <p><span>pickup</span></p>
            </div>
        </div>

        <div className='d-flex align-items-center p-4'>
            <div>
            <i class="fa-solid fa-box-open fs-3" />
            </div>
            <div className='ps-4 fs-5 fw-bold'>
            <p className='m-0'><span>Free shipping on <br /> orders over $50</span></p>
            </div>
        </div>

        <div className='d-flex align-items-center p-4'>
            <div>
            <i class="fa-solid fa-percent fs-3" />
            </div>
            <div className='ps-4 fs-5 fw-bold'>
            <p className='m-0'><span>Low prices <br /> guaranteed</span></p>
            </div>
        </div>


        <div className='d-flex align-items-center p-4 pe-5'>
            <div className=''>
            <i class="fa-solid fa-clock-rotate-left fs-3" />
            </div>
            <div className='ps-4 fs-5 fw-bold'>
            <p className='m-0'><span>Available to <br /> you 24/7</span></p>
            </div>
        </div>
    </div>
    
</div>
  )
}
