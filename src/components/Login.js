import React from 'react'
import "../css/login.css"

export default function Login() {
    return (
        <div className="loginWrapper">
        <div className="header">
            <h1><span>eazy</span>Search</h1>   
        </div>
        <div>
            <form className="form">
                <div className="text">
                    <h2><span>Log</span>In</h2>
                </div>
                <div>
                    <input className="input username" type="text" name="username" placeholder="Username:" />
                </div>
                <div>
                    <input className="input password" type="text" name="password" placeholder="Password:" />
                </div>
                <div>
                    <input className="checkbox" type="checkbox" name="remember" /> Remember Me
                </div>
                <div>
                    <button className="btn">Log In</button>
                </div>
            </form>
            <div className="register">
                <p><u>Don't have an account? Register</u></p>
            </div>
        </div>
        </div>
    )
}
