import React, { useContext } from 'react'
import { Seller_card } from './Seller_card'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { product_store } from '../../Pages/Landing'

export const Home_BestSellers = () => {
const navigate = useNavigate();
const handleNavigate = () =>{
    navigate("/sellers")
}
const product_obj = useContext(product_store)
  return (
    <div className='px-5 py-4'>
    <div className='shadow-lg  p-5' style={{backgroundColor: "white"}}>
        <h2 className='text-center fs-2 fw-bold'><span>Best Sellers</span></h2>
        <div className='p-5'>
            <Seller_card product={product_obj}/>
        </div>
        <div className='p-3 text-center'>
            <Button btn_name="View All" class="seller_all" click={handleNavigate}></Button>
        </div>
    </div>
</div>
  )
}
