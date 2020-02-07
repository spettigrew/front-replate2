import React, {Component, useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import TimePicker from 'react-time-picker';
import {useForm} from 'react-hook-form';



export default function BusinessFillForm() {
   
    const {register, handleSubmit, watch, errors} = useForm()
    const onSubmit = data => {console.log(data)}


    return (
        <div className="form-wrapper">
            <div className="replate">
                <h1>Replate</h1>
            </div>
            <div className="fill-header">
                <h1> Business Food Form</h1>
            </div>
            <div className="food-inputs">
               
                <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
                    <label className='description-label'> Please describe the type of food you're donating.</label>
                    <textarea
                      placeholder="description"
                      name="description"
                      ref={register({ required: true, maxLength: 500})}
                    />
                <label className="servings-label">
                Please pick the amount of servings
                <select> 
                <option value="1serving">1 Serving</option> 
                <option value="2serving">2 Servings</option> 
                <option value="3serving">3 Servings</option> 
                <option value="4serving">4 Servings</option> 
                <option value="5serving">5 Servings</option> 
                <option value="6serving">6 Servings</option> 
                <option value="7serving">7 Servings</option> 
                <option value="8serving">8 Servings</option> 
                <option value="9serving">9 Servings</option> 
                <option value="10serving">10 Servings</option> 
                <option value="11serving">11 Servings</option> 
                <option value="12serving">12 Servings</option> 
                <option value="13serving">13 Servings</option> 
                <option value="14serving">14 Servings</option> 
                <option value="15serving">15 Servings</option> 
                <option value="16serving">16 Servings</option> 
                <option value="17serving">17 Servings</option> 
                <option value="18serving">18 Servings</option> 
                <option value="19serving">19 Servings</option> 
                <option value="20serving">20 Servings</option> 
                <option value="21serving">21 Servings</option> 
                <option value="22serving">22 Servings</option> 
                <option value="23serving">23 Servings</option> 
                <option value="24serving">24 Servings</option> 
                <option value="25serving">25 Servings</option> 
                </select>
                </label>
                <label className="time-label">Please choose a date and time for pickup</label>
                    <input type="datetime-local"
                      name="date"
                      ref={register({ required: true, maxLength: 20})}
                    />


                <Button color="primary">Submit</Button>
                </form>
            </div>
            <footer>
                Copyright Replate @ 2020
            </footer>
        </div>
    )
}
