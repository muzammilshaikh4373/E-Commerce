import React from 'react'
import { location } from './Const'
import style from './CSS/contact1.module.css'

function Contact1({ logo, title, content }) {
    return (
        <>
            <div className={style.maincontainer}>
                <span className={style.icone}>
                     {logo}
                </span>
                <h4 className={style.span2}>{title}</h4>
                <p>{content}</p>
                
                
            </div>
           
        </>
    )
}

export default Contact1