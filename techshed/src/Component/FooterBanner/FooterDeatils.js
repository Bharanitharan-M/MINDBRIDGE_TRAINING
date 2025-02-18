import React from 'react'
import { Link } from 'react-router-dom'

export const FooterDeatils = () => {
    return (
        <div className='p-5'>
            <div className='d-flex justify-content-between px-5'>
                <div>
                    <p className='fs-5 fw-bold'><span>Store Location</span></p>
                    <div className='py-5'>
                        <p className='fs-6 fw-light'>
                            <span className='lh-lg'>
                                500 Terry Francine Street <br />
                                San Francisco, CA 94158 <br />
                                info@mysite.com</span>
                        </p>
                        <p>
                            <span>123-456-7890</span>
                        </p>
                        <div className='d-flex justify-content-between fs-4 py-3'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>

                <div>
                <p className='fs-5 fw-bold'><span>Shop</span></p>
                <div className='py-5'>
                    <ul className= "p-0 fs-6"style={{listStylePosition: "inside"}}>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Shop All</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Computers</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Tablets</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Drones & Cameras</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Audio</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Mobile</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>T.V & Home Cinema</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Wearable Tech</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Sale</li></Link>
                    </ul>
                </div>
                </div>

                <div>
                <p className='fs-5 fw-bold'><span>Customer Support</span></p>
                <div className='py-5'>
                    <ul className= "p-0 fs-6"style={{listStylePosition: "inside"}}>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Contact Us</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Help Center</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>About Us</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Careers</li></Link>
                    </ul>
                </div>
                </div>

                <div>
                <p className='fs-5 fw-bold'><span>Policy</span></p>
                <div className='py-5'>
                    <ul className= "p-0 fs-6"style={{listStylePosition: "inside"}}>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Shipping & Returns</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Terms & Conditions</li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>Payment Methods </li></Link>
                        <Link className='text-black text-decoration-none'><li  className='py-2'>FAQ</li></Link>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
