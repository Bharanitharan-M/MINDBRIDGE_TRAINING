import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const Default_page = () => {
  const location = useLocation()
  return (
    <div>
    {(location.pathname !== '/login' && location.pathname !== '/sign_up') &&  <Navbar />}
   
    <Outlet />
    </div>
  )
}
