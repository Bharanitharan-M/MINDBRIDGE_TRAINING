import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import storage from '../../JSON/storage.json'
import './Categorie.css'
export const Categorie = () => {
    const location = new URLSearchParams(useLocation().search).get("categorie")
    const navigate = useNavigate();
    const hadleclick = (shop_name) => {
        navigate(`/restaurants?name=${shop_name}`)
    }
    const cat_list = storage.restaurants.filter(items =>
        items.foods.some(food => food.category === location)
    )

    return (
        <div className='categories'>
            <div className='cat_title'>
                <h4>{cat_list.length} Restaurants provide {location}</h4>
            </div>

            <div className='restaurants_list'>
                {cat_list.map(item => <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={item.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p>Rating: {item.rating}</p>
                            <ul>
                                {[...new Set(item.foods.map(item => item.category))].map(category => (
                                    <li key={category}>{category}</li>
                                ))}
                            </ul>
                            <button onClick={()=> hadleclick(item.name)}>Order Now</button>
                        </div>
                    </div>
                </div>
                )}

            </div>
        </div>
    )
}
