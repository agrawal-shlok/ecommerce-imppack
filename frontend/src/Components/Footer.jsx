import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.company_logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Welcome to Imppack, where innovation meets excellence in packaging solutions! Based in Sambalpur, Odisha, we are a dynamic startup dedicated to manufacturing premium-quality boxes tailored to meet diverse needs across industries                </p>
            </div>

            <div >
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/delivery">DELIVERY</Link></li>
            <li><Link to="/privacypolicy">PRIVACY POLICY</Link></li>
            <li><Link to="/terms-and-conditions">TERMS & CONDITIONS</Link></li>
            <li><Link to="/cancellationandrefundpolicy">CANCELLATION/REFUND POLICIES</Link></li>
          </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91- 83404 32838</li>
                    <li>imppacksbp@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>copyright 2024@ imp-pack.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer