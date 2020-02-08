import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import axios from 'axios';
import {useForm} from 'react-hook-form';

export default function BusinessForm(props) {
    const [Data, setData] = useState([])
    
    const {register, handleSubmit, watch, errors} = useForm()
    

    useEffect(()=>{
        axios
        .get("https://replate2.herokuapp.com/")
        .then(res =>{
            setData(res.data.message)
          console.log(res);
        })
        .catch(err =>{
          console.log("oh no! Looks Like there was an error!", err);
        })
      })


      const onSubmit = data => {console.log(data)}


    return (
        
        <div className="reg-wrapper">
            <div className="replate">
                <h1>Replate</h1>
            </div>
            <div className="registration-header">
                <h1> Business Registration Form</h1>
            </div>
            <div className="inputs">
                <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
                    <label>Full Name</label>
                    <input
                      name="fullname"
                      ref={register({ required: true, maxLength: 20})}
                    />
                    {errors.fullname && <h7 className="required">This field is required</h7>}
                    <label>Business Name</label>
                    <input
                      name="business"
                      ref={register({ required: true, maxLength: 20})}
                    />
                    {errors.business && <h7 className="required">This field is required</h7>}
                    <label>Business Address</label>
                    <input
                      name="address"
                      ref={register({ required: true, maxLength: 20})}
                    />
                    {errors.address && <h7 className="required">This field is required</h7>}
                    <label>Business Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" requried
                      ref={register({ required: true, maxLength: 12})}
                    />
                    <span className="format">Format: 123-123-1234</span>
                    {errors.phone && <h7 className="required">This field is required</h7>}
                    <label>Business E-mail</label>
                    <input
                      name="email"
                      type="email"
                      ref={register({ required: true, maxLength: 20})}
                    />
                    {errors.email && <h7 className="required">This field is required</h7>}
                <Button color="primary">Submit</Button>
                </form>
            </div>
            <footer>
                Copywrite Replate @ 2020
            </footer>
        </div>
    )
}
