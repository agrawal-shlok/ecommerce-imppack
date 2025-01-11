import React, { useContext } from 'react';
import { Shopcontext } from '../Context/Shopcontext';
import Title from './Title';

const Carttotal = () => {
  const { currency, calculateShippingFee, getcartamount } = useContext(Shopcontext);

  const subtotal = getcartamount();
  const shippingFee = calculateShippingFee();
  const total = subtotal + shippingFee;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>SUBTOTAL</p>
          <p>{currency} {subtotal.toFixed(2)}</p>
        </div>
        <hr />

        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {subtotal === 0 ? '0.00' : shippingFee.toFixed(2)}</p>
        </div>
        <hr />

        <div className='flex justify-between'>
          <b>TOTAL</b>
          <b>{currency} {subtotal === 0 ? '0.00' : total.toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
};

export default Carttotal;
