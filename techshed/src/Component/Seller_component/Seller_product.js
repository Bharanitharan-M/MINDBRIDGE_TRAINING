import React, { useContext } from 'react'
import { product_store } from '../../Pages/Landing'
import { Link } from 'react-router-dom'

export const Seller_product = () => {
    const product_obj = useContext(product_store)
    return (
        <div className='ps-5 w-100'>
            <div>
                <h1 className='pb-5'>Best Sellers</h1>
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <p>12 products</p>
                </div>
                <div className='pe-1 dropdown'>
                    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Sort by: Recommends</button>
                    <ul class="dropdown-menu border border-dark" aria-labelledby="dropdownMenuButton1">
                        <li className='py-2 px-4'><Link class="dropdown-item" href="#">Recommended</Link></li>
                        <li className='py-2 px-4'><Link class="dropdown-item" href="#">Newest</Link></li>
                        <li className='py-2 px-4'><Link class="dropdown-item" href="#">Price (low to high)</Link></li>
                        <li className='py-2 px-4'><Link class="dropdown-item" href="#">Price (high to low)</Link></li>
                        <li className='py-2 px-4'><Link class="dropdown-item" href="#">Name A-Z</Link></li>
                        <li className='py-2 px-4'><Link class="dropdown-item" href="#">Name Z-A</Link></li>
                    </ul>
                </div>
            </div>
            <div className='cardContainer d-flex flex-wrap'>
                <div className='row'>
                    {product_obj.map(i =>
                        <div className='col pb-5'>
                            <Link className='text-decoration-none text-black'>
                                <div className="cards position-relative">
                                    <p className='position-absolute bg-danger text-white p-3 py-1 m-3 rounded-pill saleTAge'>SALE</p>
                                    <img src={i.img_src} className="card-img-top m-0" alt="..." />
                                </div>
                                <div className="product-content pt-3">
                                    <p className="card-text mb-0">{i.product_name}</p>
                                    <p className='price fs-5 mb-0'><del>{i.mark_price}</del> <span>{i.price}</span></p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}
