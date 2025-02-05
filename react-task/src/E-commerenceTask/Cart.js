import React from 'react';
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Productscontext } from './WebSite_layout';
import './Cart.css'
import Button from '../Components/Button';
export const Cart = () => {
  const handleCart = useContext(Productscontext);
  const cartProduct = handleCart.state.cart_product;
  const remove_cart = handleCart.remove_cart;
  return (
    <div className='cart_display'>
      <div className='cart_title'>
        <h4>Your Cart List</h4>
      </div>
      <div className='cart_body'>
        {cartProduct.length ?   cartProduct.map(items => (
          <div className='card_layout'>
            <div className='cart_image'>
              <img src={items.image} alt="" style={{ width: "150px" }} />
            </div>
            <div className='cart_info'>
              <h3>{items.title}</h3>
              <p>{items.description}</p>
              <button onClick={()=> remove_cart(items.id)}>Remove</button>
              <div className="price_rat">
              <p>${items.price}</p>
             
            </div>
            </div>
           
          </div>
        )) : <h5>Your Cart is Empty</h5>}
      
      </div>
    </div>

  )
}
