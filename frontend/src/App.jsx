import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Placeorder from './Pages/Placeorder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TermsAndConditions from './Pages/Termsandconditions'
import PrivacyPolicy from './Pages/Privacypolicy'
import CancellationRefundPolicy from './Pages/Cancellationandrefundpolicy'
import ShippingDeliveryPolicy from './Pages/Delivery'
import PricingDetails from './Pages/Pricing'

const App = () => {
  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar/>
        <Searchbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:productid' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/placeorder' element={<Placeorder/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/cancellationandrefundpolicy" element={<CancellationRefundPolicy/>} />
          <Route path="/delivery" element={<ShippingDeliveryPolicy/>} />
          <Route path="/pricing" element={<PricingDetails/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App