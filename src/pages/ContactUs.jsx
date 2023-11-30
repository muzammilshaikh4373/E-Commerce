import React from 'react'
import style from './CSS2/contact.module.css'
import Contact1 from '../Components/contact1'
import { content1, content2, content3, location, logo2, logo3, title1, title2, title3 } from '../Components/Const'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <>
       <div className={style.imgdiv}>
        <div className={style.contactContainer}>
             <center> <h1>Contact Us</h1></center>
             <center> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, autem at. Recusandae, aspernatur nobis voluptates praesentium possimus molestiae inventore, dicta, necessitatibus modi nemo ducimus dolorum voluptate. Quae inventore repellat quia.</p></center>
         <br />
         
         <div className={style.iconecontainer}>
         <Contact1 logo={location} title={title1} content={content1}/>
        <br />
         <Contact1 logo={logo2} title={title2} content={content2}/>
         <br />
         <Contact1 logo={logo3} title={title3} content={content3}/>
           
          
         </div >
         <div className={style.ContactForm}>
         <ContactForm/>
         </div>
          
        
         
         

            
        </div>
       </div>
    </>
  )
}

export default Contact