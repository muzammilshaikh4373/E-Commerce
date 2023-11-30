import React from 'react'
import style from './CSS2/register.module.css'

function Register() {
    return (
        <div className={style.maincontainer}>
            <div className={style.Registercontainer}>
                <h1>Register</h1><br />
                <input type="text"  placeholder='Please Enter Name'/>
                <br />
                <input type="text" placeholder='Email'/>
                <br />
                <input type="text" placeholder='Password'/>
                <br />
                <button>Register</button>
                <h2>Login</h2>
            </div>
        </div>
    )
}

export default Register