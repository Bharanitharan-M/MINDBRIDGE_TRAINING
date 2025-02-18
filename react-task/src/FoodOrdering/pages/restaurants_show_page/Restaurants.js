import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import storage from '../../JSON/storage.json'
import './Restaurant.css'
import { useDispatch, useSelector } from 'react-redux'
import * as  call_action from '../../Redux/action/callAction'
export const Restaurants = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loaction = new URLSearchParams(useLocation().search).get("name");
    const restaurant = storage.restaurants.filter(item => item.name === loaction)
    const cart_item = useSelector((state) => state.all_data.cart)
    const handle_addCart = (item) => {  
        dispatch(call_action.add_cart(item));
    }
    const handle_removeCart = (item) =>{
        dispatch(call_action.remove_cart(item));
    }
    const handle_buyNow = () => {
        navigate("/cart")
    }
    return (
        <div>
        <div className='restaurant'>
            <div className='restaurant_title'>
                <img src={restaurant[0].img} alt="" />
                <div className='rating'>
                    <h2>Rating: {restaurant[0].rating}</h2>
                </div>
            </div>
            <div className='menu_text'>
                <p>Menu <i className="fa-solid fa-utensils" /></p>
                <hr />
            </div>

            <div className='restaurant_foods'>
                {restaurant[0].foods.map(item =>
                    <div className='food' key={item.name}>
                        <div>
                            <h5>{item.name} -  <small>₹ 399</small></h5>
                            <p>Rating: {item.rating}</p>
                        </div>
                        <div className='food_icon'>
                            <i className={item.icon} />
                            <div className='cart_style'>
                                <button onClick={() => handle_addCart(item)}><p>+</p></button>  <p>{cart_item.find(cartitem => cartitem.item.name == item.name) ?.no_item || 0}</p> <button onClick={() => handle_removeCart(item)}><p>-</p></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <div className='order_now_btn'>
        {cart_item.length != 0 && <button onClick={handle_buyNow}>Order Now</button>}
    </div>
    </div>
    )
}
