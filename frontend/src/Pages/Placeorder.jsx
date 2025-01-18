import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import Carttotal from '../Components/Carttotal'
import { assets } from '../assets/assets'
import { Shopcontext } from '../Context/Shopcontext'
import { toast } from 'react-toastify'
import axios from 'axios'
const Placeorder = () => {


    const [method,setMethod] = useState('cod');
    const{navigate,backendurl,token,cartitems,setCartitems,getcartamount,delivery_fee,products} = useContext(Shopcontext)
    const [formdata,setFormdata] = useState({
        firstname:'',
        lastname:'',
        email:'',
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""

    })

    const onchangehandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormdata(prevData => ({ ...prevData, [name]: value }))
    }



    const initpay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name:'order payment',
            description:'order payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response);
                try {
                    const {data} = await axios.post(backendurl+'/api/order/verifyrazorpay',response,{headers:{token}})
                    if (data.success) {
                        navigate('/orders')
                        setCartitems({})
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error)
                    
                }
                
            }
        }
        const rzp = new window.Razorpay(options);
        rzp.open();
    }



    const onsubmithandler = async (event) => {
        event.preventDefault()
        try {
            
            let orderitems = []
            for(const items in cartitems){
                for(const item in cartitems[items]){
                    if (cartitems[items][item]>0) {
                        const iteminfo = structuredClone(products.find(product => product._id === items))
                        if (iteminfo) {
                            iteminfo.size = item
                            iteminfo.quantity = cartitems[items][item]
                            orderitems.push(iteminfo)
                        }
                    }
                }
            }

            let orderdata = {
                address: formdata,
                items: orderitems,
                amount: getcartamount() + delivery_fee
            }
            
            switch(method){
                // api calls for cod order
                case 'cod' : 
                    const response = await axios.post(backendurl + '/api/order/place',orderdata,{headers:{token}})
                    
                    
                    if (response.data.success) {
                        setCartitems({})
                        navigate('/orders')
                    } else{
                        toast.error(response.data.message)
                    }
                break;

                default:
                    break;

                
                case 'razorpay':

                const responserazorpay = await axios.post(backendurl + '/api/order/razorpay', orderdata,{headers:{token}})
                if(responserazorpay.data.success){
                    initpay(responserazorpay.data.order);
                    
                }

                break;
            }



        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    }
    

  return (
    <form onSubmit={onsubmithandler} className='flex flex-col sm:flex-row justify-between gap-4 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
              <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>
          <div className='flex gap-3'>
              <input required onChange={onchangehandler} name='firstname' value = {formdata.firstname}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name'  />
              <input required  onChange={onchangehandler} name='lastname' value = {formdata.lastname} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name'  />
          </div>
          <input required  onChange={onchangehandler} name='email' value = {formdata.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Adress'  />
          <input required  onChange={onchangehandler} name='street' value = {formdata.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'  />

          <div className='flex gap-3'>
              <input required  onChange={onchangehandler} name='city' value = {formdata.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'  />
              <input required  onChange={onchangehandler} name='state' value = {formdata.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'  />
          </div>

          <div className='flex gap-3'>
              <input required  onChange={onchangehandler} name='zipcode' value = {formdata.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'  />
              <input required  onChange={onchangehandler} name='country' value = {formdata.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'  />
          </div>
          <input required  onChange={onchangehandler} name='phone' value = {formdata.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone No'  />

      </div>

      {/* TExt right side */}
      <div className='mt-8'>
            <div className='mt-8 min-w-80'>
                <Carttotal/>
            </div>
            <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD'}/>
            {/* Payment Method Selection */}
            <div className='flex gap-3 flex-col lg:flex-row'>
                <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                    <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
                </div>
                <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                    <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
                </div>
                <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                    <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                </div>
            </div>
            <div className='w-full text-end mt-8'>
                <button type='submit'  className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
            </div>
            </div>
      </div>
    </form>
  )
}

export default Placeorder