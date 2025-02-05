import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../E-commerenceTask/Assests/Images/E-commerece_logo.jpg'
import './Navbar.css'
import { Productscontext } from '../../E-commerenceTask/WebSite_layout'
export const Navbar = () => {
    const total_cart = useContext(Productscontext).state.cart_product.length;
    return (
        <>
    <nav>
        <div className='logo_filed nav_style'>
            <img src={logo} alt=""/>
            <h5>MegaMart</h5>
        </div>
        <div className='link_filed nav_style'>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i>{total_cart}</NavLink>
            </li>

        </ul >
        </div>
    </nav >
    </>
  )
}
