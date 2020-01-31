import React, {useState, useEffect} from 'react'

export default function BusinessForm() {
    // const [ users, setUsers ] = useState([]);
    // const [ name, setName ] = useState('');
    // const [ businessName, setBusinessName ] = useState('');
    // const [ businessAddress, setBusinessAddress ] = useState('');
	// const [ email, setEmail ] = useState('');



    return (
        <div className="wrapper">
            <h1>Business Registration Form</h1>
            <div className="inputs">
                <input 
                required className="half" 
                placeholder='username' 
                name='name' 
                type='text' 
                />
            </div>
        </div>
    )
}
