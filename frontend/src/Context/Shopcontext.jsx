import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export const Shopcontext = createContext();


const Shopcontextprovider = (props) => {

    const currency = '₹'
    const delivery_fee = 100;
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const[search,setSearch] = useState('')
    const[showsearch,setShowsearch] = useState(false)
    const[cartitems,setCartitems] = useState({});
    const[products,setProducts] = useState([])
    const[token,setToken] = useState('')
    const navigate = useNavigate();
    


    const addtocart = async ({itemid,size}) => {

        if (!size) {
            toast.error('Select product size')
            return;
        }


        let cartdata = structuredClone(cartitems);
        if (cartdata[itemid]) {
            if (cartdata[itemid][size]) {
                cartdata[itemid][size] += 1;
            }
            else{
                cartdata[itemid][size] = 1;
            }
        }
        else{
            cartdata[itemid] = {};
            cartdata[itemid][size] = 1;
        }
        setCartitems(cartdata)

        if (token) {
            try {
                await axios.post(backendurl + '/api/cart/add',{itemid,size},{headers:{token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
    }

    
    
    const getcartcount = () => {
        let totalcount = 0;
        for(const items in cartitems){
            for(const item in cartitems[items]){
                try {
                    if (cartitems[items][item] > 0) {
                        totalcount +=  cartitems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalcount;
    }

    const updatequantity = async (itemid,size,quantity) => {
        let cartdata = structuredClone(cartitems);
        cartdata[itemid][size] = quantity;

        setCartitems(cartdata);

        if (token) {
            try {
                await axios.post(backendurl + '/api/cart/update',{itemid,size,quantity}, {headers:{token}})

            } catch (error) {
                                console.log(error);
                toast.error(error.message)
            }
        }
    }



    const getcartamount =  () => {
        let totalamount = 0;
        for(const items in cartitems){
            let iteminfo = products.find((product) => product._id === items)
            for(const item in cartitems[items]){
                try {
                    if (cartitems[items][item] > 0) {
                        totalamount += iteminfo.price * cartitems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalamount;
    }

    
    const getproductsdata = async () => {
        try {
          const response = await axios.get(backendurl + "/api/product/list");
          
          // Check the response structure here to make sure you're accessing the products array correctly
          if (response.data && Array.isArray(response.data.products)) {
            setProducts(response.data.products); // Set products if it's an array
          } else {
            console.error("Expected 'products' to be an array, but got:", response.data);
            toast.error("Error: Products data is not in expected format.");
          }
        } catch (error) {
          console.error(error);
          toast.error(error.message);
        }
      };

      const getusercart = async (token) => {
        try {
            const response = await axios.post(backendurl + '/api/cart/get',{},{headers:{token}})
            if(response.data.success){
                setCartitems(response.data.cartdata)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
      }
      

    useEffect(() => {
        getproductsdata()
    },[])

    useEffect(() =>{
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getusercart(localStorage.getItem('token'))
        }
    },[])


    const value = {
        products , currency , delivery_fee,search,setSearch,setShowsearch,showsearch,setCartitems,
        cartitems,addtocart,getcartcount,updatequantity,getcartamount,navigate,backendurl,
        setToken,token
    }


    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    )

}


export default Shopcontextprovider;