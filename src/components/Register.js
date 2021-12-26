import React from 'react'
import "../css/register.css"

export default function Register() {
    return (
        <div className="registerWrapper">
        <div className="header">
            <h1><span>eazy</span>Search</h1>   
        </div>
        <div>
            <form className="form">
                <div className="text">
                    <h2>Registration</h2>
                </div>
                <div>
                    <input className="input username" type="text" name="username" placeholder="Username:" />
                </div>
                <div>
                    <input className="input email" type="text" name="email" placeholder="Email:" />
                </div>
                <div>
                    <input className="input password" type="text" name="password" placeholder="Password:" />
                </div>
                <div>
                    <input className="input confirm" type="text" name="confirmpassword" placeholder="Confirm Password:" />
                </div>
                <div>
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}
