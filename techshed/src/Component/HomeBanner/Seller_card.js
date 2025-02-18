import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom';

export const Seller_card = (props) => {
    let products = props.product;
    let [show_product, setShow_product] = useState(products.slice(0, 4));
    const move_right = () => {
        let product = products.shift()
        products.push(product)
        setShow_product(products.slice(0, 4))
    }
    
    const move_left = () => {
        let product = products.pop()
        products.unshift(product)
        setShow_product(products.slice(0, 4))
    }
    return (
        <div className='position-relative px-2 seller_card' >
            <div className='position-absolute top-50 start-0 pe-3'>
                <Button btn_name={<i class="fa-solid fa-chevron-left fs-6" style={{ color: "gray" }} />} class="move" click={move_left}></Button>
            </div>
            <div className="d-flex overflow-scroll scroll-hidden ps-4" style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}>
                {show_product.map((item,index) => (
                    <div key={index} className="card position-relative overflow-hidden col-12 me-4" style={{ width: "320px" }} >
                         <Link className='text-decoration-none'>
                        <img src={item.img_src} width={"289px"} />
                        <div className="card-body bg-transparent">
                            <p className="card-text lh-sm text-black" style={{ fontSize: "17px" }}>{item.product_name}</p>
                            <div style={{ color: "var(--primary-btn-color)" }} className='fs-5'>
                                <span ><del>${item.mark_price}</del></span>
                                <span className='ps-1'>${item.price}</span>
                            </div>
                        </div>
                        <div className='position-absolute' style={{ top: "20px", left: "20px" }}>
                            <div className='bg-danger rounded-pill text-white '>
                               <p className='px-3 py-1 fw-light'>Sale</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='position-absolute top-50 start-100 '>
                <Button btn_name={<i class="fa-solid fa-chevron-right fs-6" style={{ color: "gray" }} />} class="move" click={move_right}></Button>
            </div>
        </div>

    )
}
