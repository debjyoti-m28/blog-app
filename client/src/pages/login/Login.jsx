import React from 'react'
import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>

        <form className="loginForm">
            <label>Email</label>
            <input type="email" placeholder='Enter your email'/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password'/>

            <button className="loginBtn">Login</button>
            <button className="loginRegBtn"><Link className="link" to="/register">Resister</Link></button>
        </form>
    </div>
  )
}
