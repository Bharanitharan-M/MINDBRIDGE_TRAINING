import React from 'react'
import { Seller_filter } from '../../Component/Seller_component/Seller_filter'
import { Seller_product } from '../../Component/Seller_component/Seller_product'
import { Link } from 'react-router-dom';
import './Sellers.css'
export const Seller = () => {
    const history = window.history;
    console.log(history.state)
    return (
        <div className='px-5 py-3 bestsellerpage'>
            <div className='fs-6'>
                <p>Home {'>'} Best Sellers</p>
            </div>
            <div className='d-flex py-5'>
                <Seller_filter />
                <Seller_product />
            </div>
        </div>
    )
}




