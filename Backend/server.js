import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import connectdb from './config/Mongodb.js';
import connectcloudinary from './config/cloudinary.js';
import userrouter from './routes/Userroutes.js';
import productrouter from './routes/Productroute.js';
import cartrouter from './routes/Cartroute.js';
import orderrouter from './routes/Orderroute.js';
dotenv.config();


//App config
const app = express()
const port = process.env.PORT || 4000
connectdb()
connectcloudinary()

//Middlewares

app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/user',userrouter)
app.use('/api/product',productrouter)
app.use('/api/cart',cartrouter)
app.use('/api/order',orderrouter)

app.get('/', (req,res) => {
    res.send("API working")
})

app.listen(port,()=> console.log("server started on port "+ port))