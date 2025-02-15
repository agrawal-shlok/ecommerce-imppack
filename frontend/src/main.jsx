
try {
  console.log(import.meta.env);
} catch (error) {
  console.log(error);
}


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Shopcontextprovider from './Context/Shopcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Shopcontextprovider>
      <App />
    </Shopcontextprovider>


  </BrowserRouter>,
)
