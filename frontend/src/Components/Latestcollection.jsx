import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Title from './Title'
import Productitem from './Productitem'

const Latestcollection = () => {

  const {products} = useContext(Shopcontext)
  const[latestproducts,setLatestproducts] = useState([])
    useEffect(() => {
        setLatestproducts(products.slice(0,10));
    },[products])

    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1 = {'LATEST'} text2 = {'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            "Introducing our latest collection of boxes—designed with precision, crafted for durability, and tailored to meet your packaging needs. Discover the perfect fit for every purpose today!"
            </p>
        </div>
        {/* rendering producrs */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestproducts.map((item,index) => (
                    <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default Latestcollection