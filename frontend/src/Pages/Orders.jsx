import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Title from '../Components/Title';
import axios from 'axios';

const Orders = () => {

  const{backendurl,token, currency} = useContext(Shopcontext);
  const [orderdata,setOrderdata] = useState([])

  const loadorderdata = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendurl + '/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allordersitem = []
        response.data.orders.map((order)=>{
          order.items.map((item) =>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentmethod'] = order.paymentmethod
            item['date'] = order.date
            allordersitem.push(item)
          })
        })

        setOrderdata(allordersitem.reverse());
        
      }
        
    } catch (error) {
      console.log(error);
      
    }
  }


useEffect(() => {
  loadorderdata()
},[token])

  return (
    <div className='border-t pt-16'>
      <div>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>

        {
          orderdata.map((item,index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                  <img src={item.image[0]} alt="" className='w-16 sm:w-20' />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                      <p >{currency}{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className='mt-1'>Date : <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                    <p className='mt-1'>Payment : <span className='text-gray-400'>{item.paymentmethod}</span></p>
                  </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm text-base'>{item.status}</p>
                </div>
                <button onClick={loadorderdata} className='border px-4 py-2  text-sm  font-medium rounded-sm'>TRACK ORDER</button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders