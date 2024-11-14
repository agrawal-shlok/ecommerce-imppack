import React from 'react'
import { assets } from '../assets/assets'

const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>



        <div >
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default Ourpolicy