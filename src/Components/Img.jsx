import React from 'react'
import style from './CSS/NavBar.module.css'
import CardForproduct from '../pages/Home'
import Product from '../pages/Product'
import{ Typewriter} from 'react-simple-typewriter'

function Img() {
  return (
   <>
   
   <div className={style.bgimg}>
        <div className={style.fonthighlight}>
          <h1 style={{ color: "white" }}>NEW SESSION ARRIVALS</h1><br /> <span>CHECK OUT ALL TRENDS</span>  <span className="text-white display-5 " style={{ color: 'red',fontWeight: 'bold', backgroundColor:"red"}}>
          <Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['MENS', 'WOMENS', 'JEWELERY','ELECTRONICS']}
            // onLoop={(loopCount) =>
            //   console.log(`Just completed loop ${loopCount}`)
            // }
          />
          </span>

        </div>
      </div>
      <br />
        
      <Product/>


   </>
  )
}

export default Img