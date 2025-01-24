import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import cors from 'cors'
import connectdb from './config/Mongodb.js';
import userrouter from './routes/Userroutes.js';
import productrouter from './routes/Productroute.js';
import cartrouter from './routes/Cartroute.js';
import orderrouter from './routes/Orderroute.js';
import path from 'path';
import __dirname from './Dirname.js';
import { fileURLToPath } from "url";

// // Define __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);



console.log(process.env);

// App config
const app = express()
const port = process.env.PORT || 4000
connectdb()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API endpoints
app.use('/api/user', userrouter)
app.use('/api/product', productrouter)
app.use('/api/cart', cartrouter)
app.use('/api/order', orderrouter)

app.get('/', (req, res) => {
    res.send("API working")
})

// Start server
app.listen(port, () => console.log("server started on port " + port))
