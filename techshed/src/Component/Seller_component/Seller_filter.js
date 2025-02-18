import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Seller_filter = () => {
    return (
        <div className=''>
            <div className='sidenave'>
                <p className='fs-4 pb-2 mb-2'>Browese by</p>
                <hr />
                <div>
                    <ul className='m-0 p-0'>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>All Products</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none '>
                            <li className='py-3'>Best Sellers</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Computers</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Drones & Cameras</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Headphones</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Home Page Sale</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Mobile</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Sale</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Speakers</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Tablets</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>TV & Home Cinema</li>
                        </NavLink>
                        <NavLink className='text-black text-decoration-none'>
                            <li className='py-3'>Wearable Tech</li>
                        </NavLink>
                    </ul>
                </div>
            </div>


            

        </div>
    )
}
