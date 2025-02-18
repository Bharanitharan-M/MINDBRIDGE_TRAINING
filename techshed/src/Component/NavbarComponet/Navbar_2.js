import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar_2 = () => {
    return (
        <div className='navbar px-5 d-flex nav-2 pt-2 pb-4 bg-white '>
            <div className='d-flex p-0 align-items-center'>
                <div>
                    <Link to={"/"} className='text-black text-decoration-none fs-1 fw-bold '>TechShed</Link>
                </div>
                <div className='px-5 pt-1 position-relative nav-2'>
                    <input type="search" placeholder='Search' className='rounded-pill' />
                    <i class="fa-solid fa-magnifying-glass" />
                </div>
            </div>
            <div>
                <div className='conatiner px-3'>
                    <div className='row'>
                        <Link className='text-decoration-none text-black col-6'>
                            <div className=' d-flex align-items-center'>
                                <i className="fa-solid fa-circle-user fs-3" />
                                <span className='ps-2 fs-5 fw-light'>Log In</span>
                            </div>
                        </Link>
                        <div className='like col-2 ps-1'>
                            <Link className='text-decoration-none text-black'> <i className="fa-regular fa-heart fs-3" /> </Link>
                        </div>
                        <Link className='text-decoration-none text-black col-4'>
                            <div className='cart  d-flex ps-3 align-items-center'>
                                <div>
                                    <i className="fa-solid fa-cart-shopping fs-3" />
                                </div>
                                <div>
                                    <span className='bg-dark text-light px-1 m-1 rounded-circle fw-light text-align-center' >0</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
