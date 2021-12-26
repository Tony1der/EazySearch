import React from 'react'
import "../css/welcome.css"

export default function welcomePage() {

    return (
    <div className="appWrapper">
      <div className="header">
        <h1>Weclome to<br/><span>eazy</span>Search</h1>
      </div>
      <div className="text">
        <h3>We are glad to see you here! <span>eazy</span>Serach always ready to help you find an IT job quickly and apply without any difficulties.</h3>
      </div>
      <div className="text2">
        <h3>Why is better to choose us?</h3>
      </div>
      <div className="reasons"> 
      <div>
        <button className="btnReason">The first reason</button>
      </div>
      <div>
        <button className="btnReason">The second reason</button>
      </div>
      <div>
        <button className="btnReason">The third reason</button>
      </div>
      </div>
      <div className="text3">
        <h3 className="text2">Before we start, you need to register first. If you have been registered before, use the login button for authorization.</h3>
      </div>
      <div className="container">
      <div>
        <button className="btn btnLogin"> Log in </button>
      </div>
      <div>
        <button className="btn btnRegister">Register</button>
      </div>
      </div>
    </div>
    )
}
