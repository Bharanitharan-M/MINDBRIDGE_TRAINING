import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbars } from '../Component/Navbar/Navbar'
import { Home } from './Home/Home'
import { Footer } from '../Component/Footer/Footer'


export const Layout = () => {
  return (
    <div>
    <Navbars />
    <Outlet />
    <Footer />
    </div>

  )
}
