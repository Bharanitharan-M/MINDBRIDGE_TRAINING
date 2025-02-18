import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar_3 = () => {
  return (
    <div className='navbar nav-3 py-3 p-2 product_nav'>
                <ul className='d-flex m-0 px-5'>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>Shop All</Link>
                    </li>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>Computers</Link>
                    </li>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>Tablets</Link>
                    </li>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>Drones&Camera</Link>
                    </li>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>Audi</Link>
                    </li>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>Mobile</Link>
                    </li>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>T.V & Home Cinema</Link>
                    </li>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>Wearable Tech</Link>
                    </li>
                    <li >
                        <Link className='nav-link text-secondary fw-light'>Sale</Link>
                    </li>
                </ul>
            </div>
  )
}
