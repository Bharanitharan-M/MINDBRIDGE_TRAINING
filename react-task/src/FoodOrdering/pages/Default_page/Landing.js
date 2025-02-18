import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Default_page } from './Default_page'
import { store } from '../../Redux/store'
import {Provider} from 'react-redux'
import { Login } from '../Login_page/Login'
import { Sign_up } from '../Sign_Up_page/Sign_up'
import { Home } from '../Home_page/Home'
import { Menu } from '../Menu_page/Menu'
import { Categorie } from '../Categories_page/Categorie'
import { Restaurants } from '../restaurants_show_page/Restaurants'
import { Cart } from '../Cart_page/Cart'
export const Landing = () => {
    const route = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Default_page />}>
              <Route path='/login' element={<Login />}/>
              <Route path='/sign_up' element={<Sign_up />} />
              <Route index element={<Home />} />
              <Route path='/menu' element={<Menu />} /> 
              <Route path='/categories' element={<Categorie />} />
              <Route path='/restaurants' element={<Restaurants />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
        )
    )
  return (
    <Provider store={store}>
    <RouterProvider router={route} />
    </Provider>
  )
}
