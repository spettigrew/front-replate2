import React from 'react'
import {Button} from 'reactstrap'


export default function BusinessForm() {


    return (
        <div className="form-wrapper">
            <div className="replate">
                <h1>Replate</h1>
            </div>
            <div className="registration-header">
                <h1> Business Registration Form</h1>
            </div>
            <div className="inputs">
                <input 
                required className="half" 
                placeholder='Username' 
                name='name' 
                type='text' 

                />
                <input 
                required className="half" 
                placeholder='Business Name' 
                name='name' 
                type='text' 
                
                />
                <input 
                required className="half" 
                placeholder='Business Address' 
                name='adress' 
                type='text' 
                
                />
                <input 
                required className="half" 
                placeholder='Business Phone Number' 
                name='number' 
                type='text' 
                
                />
                <input 
                required className="half" 
                placeholder='Business Email' 
                name='email' 
                type='email' 
                
                />
                <Button color="primary">Submit</Button>

            </div>
            <footer>
                Copywrite Replate @ 2020
            </footer>
        </div>
    )
}
