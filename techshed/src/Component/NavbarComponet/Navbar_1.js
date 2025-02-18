import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar_1 = () => {
    return (
        <div className='d-flex nav-1 pb-4 justify-content-between pt-3'>
            <div className='px-5'>
                <svg
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="33.2 33.397 133.9 133.103"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                    aria-hidden="true"
                    aria-label="Custom SVG Icon"
                >
                    <g>
                        <path
                            d="M165.7 61.6L137.2 49l-34.9-15.2c-1.3-.6-2.7-.5-3.9.1L71 46.8c-.5.1-1 .4-1.5.7L35.8 63.4c-.1.1-.2.1-.3.2-.1 0-.2.1-.2.1-.1 0-.1.1-.2.1l-.2.1c-.2.2-.4.3-.6.6l-.1.1c-.2.2-.3.4-.4.6 0 0-.1.1-.1.2-.1.2-.2.5-.3.7v.1c-.1.2-.1.4-.2.6v66.8c0 1.9 1.1 3.6 2.8 4.3l61.7 28.2h.1c.2.1.5.2.8.3h.2c.2 0 .5.1.7.1h.2c.3 0 .6 0 1-.1h.2c.3-.1.6-.2.8-.3.1 0 .1 0 .1-.1l62.6-30.8c1.6-.8 2.7-2.5 2.7-4.3V63.4c-.2-.8-.7-1.5-1.4-1.8zm-45.6 18.9L99.5 90.6l-50.3-23 23.1-10.9 47.8 23.8zm26.7-13.2c-1.1.5-2.2 1.1-3.2 1.5l-12.7 6.3-47.6-23.5 17.2-8.1L136.3 59c3.6 1.7 10 4.4 14.6 6.4-1.4.7-2.8 1.3-4.1 1.9zm-42.5 31.6l22.4-11 2 23c.2 2.5 2.3 4.4 4.8 4.4h.4c2.6-.2 4.6-2.6 4.3-5.2l-2.4-26.7 14.2-7c1.9-1 4.8-2.4 7.3-3.5V128l-53 26.1V98.9zm-9.5.1v55.4l-52.1-23.8V75.2L94.8 99z"
                            fill="#FFFFFF"
                        />
                    </g>
                </svg>
                <span className='px-4' style={{fontSize: "14px"}}>Free Shipping for orders over $50</span>
            </div>
            <div className='px-4'>
                <ul className='d-flex' style={{fontSize: "14px"}}>
                    <li className='px-3'>
                        <Link className='text-white'>About</Link>
                    </li>
                    <li className='px-3'>
                        <Link className='text-white'>Contact</Link>
                    </li>
                    <li className='px-3'>
                        <Link className='text-white'>Help Center</Link>
                    </li>
                    <li className='px-3'>
                        <Link className='text-white text-decoration-none'>Call Us <span className='text-decoration-underline'>123-456-7890</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
