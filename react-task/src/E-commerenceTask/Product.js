import React, { useContext } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import './product.css'
import { Productscontext } from './WebSite_layout';

export const Product = () => {
    const handleCart = useContext(Productscontext);
    const product = handleCart.Buy_item;
    return (
        <div className="row">
            <div className="col-sm-4">
                <img src={product.image} alt="" />
            </div>
            <div className="col-sm-8 details">
                <div className="title">
                    <h4 className="font-weight-bolder">{product.title}</h4>
                </div>
                <div className="description">
                    <p>{product.description}</p>
                </div>
                <div className="price_rating">
                    <p>${product.price}</p>
                    <div className='rating'>
                    <p><strong>Rating:</strong> {product.rating.rate} </p>
                    <p><strong>Total Buys:</strong> {product.rating.count}</p>
                    </div>
                </div>
                <div className="button">
                    <button onClick={()=> handleCart.handleAddCart(product)}>Add Cart</button>
                </div>
            </div>
        </div>
       
    )
}
