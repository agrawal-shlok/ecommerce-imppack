import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { Link } from 'react-router-dom';

const Productitem = ({ id, image, name, price }) => {
  const backendurl = import.meta.env.VITE_BACKEND_URL;
  const { currency } = useContext(Shopcontext);

  console.log(image, typeof image);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
        <img src={`${backendurl}/uploads/${Array.isArray(image) ? image[0] : image.split(',')}`} alt="" className='hover:scale-110 transition ease-in-out' />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default Productitem