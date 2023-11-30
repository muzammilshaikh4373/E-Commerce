import React from 'react'
import style from './CSS2/login.module.css'

function Login() {
  return (
    <>
      <div className={style.bodycont}>
      <div className={style.loginDiv}>
        <h1>Login</h1>
        <input type="text"  placeholder='username'/>
        <br />
        <br />
        <input type="text" placeholder='password'/>
        <br />
        <br />
        <button>Let me in</button>
      </div>
      </div>

    </>
  )
}

export default Login