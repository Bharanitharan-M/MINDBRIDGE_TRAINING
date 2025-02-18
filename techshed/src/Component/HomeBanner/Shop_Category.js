import React from 'react'
import { Button } from '../Button/Button'
import { Category_list } from './Category_list'
import { Best_price } from './Best_price'

export const Shop_Category = () => {
    const category = [{
        img_src: "https://static.wixstatic.com/media/c837a6_82b44061aa3e4ad6958d2a1ac317199c~mv2.jpg/v1/fit/w_960,h_960,q_90/c837a6_82b44061aa3e4ad6958d2a1ac317199c~mv2.webp",
        cat_name: "Computers"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_9c30b13d43264ebf888ab1e70eaf2daa~mv2.jpg/v1/fill/w_430,h_428,q_90/c837a6_9c30b13d43264ebf888ab1e70eaf2daa~mv2.webp",
        cat_name: "Mobile"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg/v1/fill/w_428,h_428,q_90/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.webp",
        cat_name: "Drones & Cameras"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_3fae8a0f61fc49c0afe7217c479c8e16~mv2.png/v1/fill/w_430,h_428,q_90/c837a6_3fae8a0f61fc49c0afe7217c479c8e16~mv2.webp",
        cat_name: "Sale"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_6d6b2a5842f449539f528c501e5cc035~mv2.jpg/v1/fill/w_428,h_428,q_90/c837a6_6d6b2a5842f449539f528c501e5cc035~mv2.webp",
        cat_name: "Tablets"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_fba39b02bd5c4f43ae6d4e1db77204c5~mv2.png/v1/fill/w_430,h_428,q_90/c837a6_fba39b02bd5c4f43ae6d4e1db77204c5~mv2.webp",
        cat_name: "Best Sellers"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_7a28e7356d6d4e9dbc6e0b1dfb2ac9b6~mv2.jpg/v1/fill/w_430,h_428,q_90/c837a6_7a28e7356d6d4e9dbc6e0b1dfb2ac9b6~mv2.webp",
        cat_name: "T.V & Home Cinema"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg/v1/fill/w_428,h_428,q_90/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.webp",
        cat_name: "Wearable Tech"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_e0521967c9bb422abb3a3913f64d1eb5~mv2.jpg/v1/fill/w_430,h_428,q_90/c837a6_e0521967c9bb422abb3a3913f64d1eb5~mv2.webp",
        cat_name: "Speakers"
    }, {
        img_src: "https://static.wixstatic.com/media/c837a6_48fba84e8b3c48b48e1b5b493a515a3b~mv2.jpg/v1/fill/w_428,h_428,q_90/c837a6_48fba84e8b3c48b48e1b5b493a515a3b~mv2.webp",
        cat_name: "Headphones"
    }]
    return (

        <div className='py-4 px-5 shop_cat'>
            <div className='shadow-lg bg-light'>
                <h2 className='text-center fs-2 fw-bold pt-4'><span> Shop By Category</span></h2>
                <Category_list catgeory={category} />
                <div className='conatiner'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-8'>
                            <Best_price sorce="https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_1791,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png" tag="Best price"/>
                        </div>
                        <div className='col-4 offer_details ps-5'>
                            <div className='ps-5'>
                            <p className='fs-2 fw-bold'><span>Save up to</span></p>
                            <p className='fs-1 fw-bold'><span>$150</span></p>
                            <p className='fs-2 fw-bold'><span>on selected laptop <br /> & tablets brands</span></p>
                            <p className='fs-6 fw-light' style={{color: "gray"}}><span>Terms and conditions apply</span></p>
                            <div className='pt-3'>
                            <Button btn_name="Shop" class="offer"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
