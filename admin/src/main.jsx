// import dotenv from 'dotenv';
// dotenv.config();

try {
  console.log("process.env:", process.env);
} catch (error) {
  console.log("process.env:", error);
}

try {
  console.log("import.meta.env:", import.meta.env);
} catch (error) {
  console.log("import.meta.env:", error);

}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
