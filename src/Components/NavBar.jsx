import React from 'react'
import style from './CSS/NavBar.module.css'
import { login, register, cart } from './Const'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../pages/Login'
import { useSelector } from 'react-redux';


function NavBar() {
  const selector =useSelector((state)=>state.handleReducer)
  const Navigate = useNavigate()
  return (
    <>
      <div className={style.container}>
        <div>

          <h2>
            Bollywood<span style={{ color: "red" }}>Style</span>
          </h2>
          <ul className={style.ulcontainer}>
            <Link to='/'> <li>Home</li></Link>
            <Link to='/product'> <li>Product</li></Link>
            <Link to={"/about"}> <li>About</li></Link>
            <Link to={"/cntactus"}><li>Contact</li></Link>
          </ul>
        </div>

        <div className={style.btncontain}>
          <button onClick={() => {
            Navigate('/login')

          }} >{login} Login</button>
          <button onClick={() => {
            Navigate("/register")
          }}>{register} Register</button>
          <button  onClick={() => {
            Navigate(`/cart/:id`)
          }}>{cart} Cart ({selector.length})</button>
        </div>


      </div>

    </>
  )
}

export default NavBar