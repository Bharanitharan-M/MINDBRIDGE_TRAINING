import { useContext } from 'react';
import './Home.css'
import { useLoaderData, useNavigate } from "react-router-dom";
import { Productscontext } from './WebSite_layout';
export const Home = () => {
    const fetched_data = useLoaderData();
    const get_context = useContext(Productscontext);
    const handleBuy = get_context.handleBuy;
    const navigate = useNavigate();
    return (
        <div className="product_show">
            <div className="product_head">
                <h3>Our Trustable Product</h3>
            </div>
            <div className="product_details">
                {fetched_data.map(element => (
                    <div className="product_box">
                        <img src={element.image} alt="" />
                        <div className="product_content">
                            <h3>{element.title}</h3>
                            <div className="product_rate">
                                <p>Rating: {element.rating.rate}</p>
                                <p>Total Buys: {element.rating.count}</p>
                            </div>
                            <div className="price">
                                <small>{element.price}</small>
                            </div>
                            <div className='btn'>
                                <button onClick={()=>{navigate("/product"); handleBuy(element) }}>View Details</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}


