import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Navbar } from '../Components/NavBar/Navbar'
import App from '../App'
import { Home } from './Home'
import { Product } from './Product'
import { Cart } from './Cart'
import { createContext, useEffect, useReducer, useState } from 'react'
import { fetch_details } from './loader'
import { WebLayout } from './WebLayout'
export const Productscontext = createContext();

export const WebSite_layout = () => {
    const [product_store, dispatch] = useState([]);
    const [Buy_item, setBuy_item] = useState();
    const handleAddCart = (item)=>{
        dispatch([...product_store,item]);
    }
    const handleBuy = (item) =>{
        setBuy_item(item);
    }
    const remove_cart = (id) =>{
        dispatch(product_store.filter((ele)=> ele.id != id));
    }
    const route = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<WebLayout />}>
            <Route index element={<Home />} loader={fetch_details} />
            <Route path='product' element={<Product />} />
            <Route path='cart' element={<Cart />} />
        </Route>
    ))

    return (
        <Productscontext.Provider value={{handleAddCart, product_store, handleBuy, Buy_item, remove_cart}}>
        <RouterProvider router={route} />
        </Productscontext.Provider>
    )
}
