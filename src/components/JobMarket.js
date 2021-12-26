import React from 'react'
import '../css/jobMarket.css'

export default function JobMarket() {
    return (
        <div className="wrapper">
        <div className="header">
            <h1><span>eazy</span>Search</h1>
        </div> 
        <div>
            <h3>Looking for a job</h3>
        </div>
        <div className="form">
            <div className="search">
                <div>
                <input className="input" type="text" />
                </div>
                <div>
                <input className="input" type="text" />
                </div>
                <div>
                <input className="input" type="text" />
                </div>
                <div>
                <input className="input" type="text" />
                </div>
                <div>
                <button className="btn">Find</button>
            </div>
            </div>
        </div>
        </div>
    )
}
