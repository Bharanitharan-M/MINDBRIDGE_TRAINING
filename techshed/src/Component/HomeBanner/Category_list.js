import React from 'react'
import { Link } from 'react-router-dom'

export const Category_list = (props) => {
  return (
    <div className='p-5'>
    <div className='px-2 py-3'>
    <div className='row text-center'>
    {props.catgeory.map((item, index) => (
       
        <div className='my-5 mx-4 col-2 category_list'>
             <Link className='text-decoration-none text-black'>
            <img src={item.img_src} alt="" width={"215px"} className='rounded-circle'/>
            <div className='pt-4 fs-5 fw-bold'>
                <span>{item.cat_name}</span>
            </div>
            </Link>
        </div>
       
    ))}
    </div>
</div>
</div>
  )
}
