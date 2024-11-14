import express from 'express'
import { placeorder,placeorderstripe,placeorderrazorpay,allorders,userorders,updatestatus, verifyrazorpay } from '../controllers/Orderscontroller.js'
import adminauth from '../middleware/Adminauth.js'
import authuser from '../middleware/Auth.js'
const orderrouter = express.Router()



//admin features
orderrouter.post('/list',adminauth,allorders)
orderrouter.post('/status',adminauth,updatestatus)

//payment features
orderrouter.post('/place',authuser,placeorder)
orderrouter.post('/stripe',authuser,placeorderstripe)
orderrouter.post('/razorpay',authuser,placeorderrazorpay)

//user feature
orderrouter.post('/userorders',authuser,userorders)

//verify payment
orderrouter.post('/verifyrazorpay',authuser,verifyrazorpay)


export default orderrouter



