import React from 'react'
import {Button} from 'reactstrap'
export default function SignUp() {
    return (
        <div className="signup-wrapper">
            <div className="replate">
                <h1>Replate</h1>
            </div>
            <div className="signup-header">
                <h1>Sign Up</h1>
            </div>
            <div className="business-signup">
                <h2>Business</h2>
                <h2>Sign-Up</h2>
                <Button color="primary">Sign Up</Button>
            </div>
            <div className="volunteer-signup">
                <h2>Volunteer</h2>
                <h2>Sign-Up</h2>
                <Button color="primary">Sign Up</Button>
            </div>
            <footer>
                Copywrite Replate @ 2020
            </footer>
        </div>
    )
}