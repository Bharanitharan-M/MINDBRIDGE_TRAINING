import React from 'react'
import './nav.css'
import { Navbar_1 } from '../NavbarComponet/Navbar_1'
import { Navbar_2 } from '../NavbarComponet/Navbar_2'
import { Navbar_3 } from '../NavbarComponet/Navbar_3'
export const Navbars = () => {
    return (
        <div className='position-sticky z-3 top-0'>
           <Navbar_1 />
           <Navbar_2 />
           <Navbar_3 />
        </div>
    )
}
