import React from 'react'
import "../css/applicationform.css"


export default function ApplicationForm() {
    return (
        <div className="formWrapper">
        <div className="header">
                <h1><span>eazy</span>Search</h1>
        </div>
            <div className="header2">
                <h3>Let us know you better</h3>
            </div>
            <div>
                <form className="form">
                    <div className="text">
                        <h2>Application Form</h2>
                    </div>
                    <div>
                        <input className="input" type="text" name="name" placeholder="Name:" />
                    </div>
                    <div>
                        <input className="input" type="text" name="surname" placeholder="Surname:" />
                    </div>
                    <div>
                        <input className="input" type="text" name="age" placeholder="Age:" />
                    </div>
                    <div>
                        <input className="input" type="text" name="email" placeholder="Email:" />
                    </div>
                    <div>
                        <input className="input" type="text" name="phone" placeholder="Phone number:" />
                    </div>
                    <div>
                        <input className="input" type="text" name="language" placeholder="Language spoken:" />
                    </div>
                    <div>
                        <input className="input" type="text" name="education" placeholder="Education:" />
                    </div>
                    <div>
                        <input className="input" type="text" name="experience" placeholder="Work experience:" />
                    </div>
                    <div>
                        <input className="input" type="text" name="Skills" placeholder="Skills:" />
                    </div>
                    <div>
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
