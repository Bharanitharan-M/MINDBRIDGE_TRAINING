import React from 'react'
import './Home.css'
import { Home_brands } from '../../Component/HomeBanner/Home_brands'
import { Home_delas } from '../../Component/HomeBanner/Home_delas'
import { Home_features } from '../../Component/HomeBanner/Home_features'
import { Home_BestSellers } from '../../Component/HomeBanner/BestSellers'
import { Shop_Category } from '../../Component/HomeBanner/Shop_Category'
import { OnSale } from '../../Component/HomeBanner/OnSale'
import { Today_sale } from '../../Component/HomeBanner/Today_sale'
import { Brand } from '../../Component/HomeBanner/Brand'
import { NewsLetter } from '../../Component/HomeBanner/NewsLetter'
export const Home = () => {
    return (
        <div>
            <Home_brands />
            <Home_delas />
            <Home_features />
            <Home_BestSellers /> 
            <Shop_Category />
            <OnSale />
            <Today_sale />
            <Brand />
            <NewsLetter />
        </div>
    )
}
