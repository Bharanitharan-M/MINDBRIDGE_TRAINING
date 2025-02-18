import React from 'react'
import { Link } from 'react-router-dom'

export const Best_price = (props) => {
    return (
        <div className='offer_image position-relative'>
                <img src={props.sorce} alt="" width={"100%"}  />
                {props.tag && <div className='position-absolute offers bg-danger p-5 rounded-circle text-white fw-bold fs-4 '>
                    <span className='fs-3'>{props.tag.split(" ")[0]} <br /> {props.tag.split(" ")[0]}</span>
                
            </div>}
            

        </div >
    )
}
