import React from 'react'
import style from './CSS/form.module.css'

function ContactForm() {
  return (
    <>
     <div className={style.formcontainer}>
        <p>Send Message</p>
        <form action="" className={style.formdiv}>
              <input type="text" placeholder='Full Name'/>
              <br />
              <input type="text"  placeholder='Email '/>
              <br />
              <input type="text" placeholder='Type your Message...'/>
              <br />
              <button>Send</button>
        </form>
     </div>
    </>
  )
}

export default ContactForm