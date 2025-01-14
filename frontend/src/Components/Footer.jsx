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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil consequatur veniam omnis enim sunt laboriosam debitis, nostrum, possimus quas, ut temporibus culpa labore incidunt provident eaque asperiores harum esse.
                </p>
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