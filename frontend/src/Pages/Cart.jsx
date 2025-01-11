import React, { useContext, useEffect, useState } from 'react';
import { Shopcontext } from '../Context/Shopcontext';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import Carttotal from '../Components/Carttotal';

const Cart = () => {
  const { products, currency, cartitems, updatequantity, navigate } = useContext(Shopcontext);
  const [cartdata, setCartdata] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempdata = [];
      for (const items in cartitems) {
        for (const item in cartitems[items]) {
          if (cartitems[items][item] > 0) {
            tempdata.push({
              _id: items,
              size: item,
              quantity: cartitems[items][item]
            });
          }
        }
      }
      setCartdata(tempdata);
    }
  }, [cartitems, products]);

  // Function to update quantity in multiples of 50
  const handleQuantityChange = (itemId, size, value) => {
    if (value === '' || value === '0') {
      updatequantity(itemId, size, 0); // Set to 0 if value is empty or 0
    } else {
      const newQuantity = Math.max(0, Math.floor(Number(value) / 50) * 50); // Ensure it increments by 50
      updatequantity(itemId, size, newQuantity); // Update the quantity
    }
  };

  // Check if all items in the cart have a quantity of at least 50
  const checkCartQuantity = () => {
    for (const item of cartdata) {
      if (item.quantity < 100) {
        return false; // If any item has less than 50 quantity, return false
      }
    }
    return true; // All items have at least 50 quantity
  };

  // Proceed to checkout only if all items have a quantity of at least 50
  const handleCheckout = () => {
    if (checkCartQuantity()) {
      navigate('/placeorder'); // Proceed to checkout if validation passes
    } else {
      alert("Please make sure all items in your cart have a quantity of at least 50.");
    }
  };

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartdata.map((item, index) => {
            const productdata = products.find((product) => product._id === item._id);
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productdata.image[0]} className='w-16 sm:w-20' alt="" />

                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productdata.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1  border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>

                {/* Handle quantity input */}
                <input
                  onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)}
                  type="number"
                  min={100} // Ensure the minimum quantity is 50
                  step={50} // Set step to 50
                  defaultValue={item.quantity}
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                />
                <img onClick={() => updatequantity(item._id, item.size, 0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <Carttotal />
          <div className='w-full text-end'>
            <button onClick={handleCheckout} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
