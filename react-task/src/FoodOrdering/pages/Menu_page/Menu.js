import React from 'react'
import storage from '../../JSON/storage.json'
import './Menu.css'
import { Link } from 'react-router-dom'
export const Menu = () => {
  return (
    <div className='menu_page'>
    <div className='show_categories'>
        <h4>Explore Our Menu</h4>
        <div className='show_categorie'>
            {storage.categories.map(item => ( <div className='cat_image'>
                <Link to={`/categories?categorie=${item.cat_name}`}><img src={item.img} alt="dish_image" /></Link>
            </div>))}
        </div>
    </div>
    </div>
  )
}
