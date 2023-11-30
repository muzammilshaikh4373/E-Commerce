import React from 'react'
import NavBar from './Components/NavBar'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Img from './Components/Img'
import Contact from './pages/ContactUs'
import About from './pages/About'
import CardForproduct from './pages/Home'
import ProductInfo from './Components/Details'
import Product from './pages/Product'
import Cart from './pages/Countercard'

function App() {
  return (
    <div>

      <NavBar />
      <br/>
     
      <Routes>
        <Route path='/' element={<Img /> } />
        <Route path='/login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='cntactus' element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route  path='/product/:id' element={<ProductInfo/>}/>
        <Route path='/product' element={ <Product/>} />
        <Route path= '/cart/:id' element={<Cart/>}/>
        
      </Routes>


    </div>
  )
}

export default App