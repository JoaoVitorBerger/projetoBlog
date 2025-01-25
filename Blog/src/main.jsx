import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Nav.jsx'
import Main from './components/Main.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>
   <Navbar />
   <Main/>
   <Footer/>
  </>
   
 </StrictMode>
)
