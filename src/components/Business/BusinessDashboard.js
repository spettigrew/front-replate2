import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, Dropdown } from "reactstrap";
import "../../css/AppBusinessRequest.css";
import { connect } from 'react-redux';
import axios from "axios"

const BusinessDashboard = props => {
  console.log(props.business_id)
 // initialState
 const [requestAdd, setRequestAdd] = useState({
  id: "",
  type: "",
  servings: "",
  pickup_time: Date.now(),
  description: "describe food to be picked up.",
  completed: false,
  business_id: props.business_id,
  volunteer_id: ""
 });

 console.log(requestAdd.business_id)

 // add request
 const newRequestAdd = e => {
  e.preventDefault();
  axios
   .post("https://replate2.herokuapp.com/api/foodRequest/", { business_id: props.business_id, ...requestAdd })
   .then(res => {
    console.log(res.data)
   })
   .catch(err => console.log(err));
 };

 //change handler
 const handleChange = e => {
  setRequestAdd({
   ...requestAdd,
   [e.target.name]: e.target.value
  });
 };

 return (
  <div>
   <h1>Business Request Form</h1>
   <p>Please fill out the food request form below.</p>
   <div className="business-register-form">
    <Form onSubmit={newRequestAdd}>
     <Row form>
      <Col md={6}>
       <FormGroup>
        <Label for="exampleType">Type</Label>

               <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Food Type
                  </Dropdown.Toggle>

                 <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">Soup</Dropdown.Item>
                   <Dropdown.Item href="#/action-2">Salad</Dropdown.Item>
                   <Dropdown.Item href="#/action-3">Bread</Dropdown.Item>
                   <Dropdown.Item href="#/action-4">Fruit/Vegetable</Dropdown.Item>
                   <Dropdown.Item href="#/action-5">Side Dish</Dropdown.Item>
                   <Dropdown.Item href="#/action-6">Entree/Main Dish</Dropdown.Item>
                   <Dropdown.Item href="#/action-7">Dessert</Dropdown.Item>
                   <Dropdown.Item href="#/action-8">Beverages</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>

        <Input
         type="text"
         name="type"
         id="type"
         placeholder="type"
         onChange={handleChange}
        />
       </FormGroup>
      </Col>
     </Row>
     <FormGroup>
      <Label for="examplePhone">Description</Label>
      <Input
       type="textarea"
       name="description"
       id="exampleDescription"
       placeholder="Describe food to be picked up."
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="exampleName">Pick-up Time</Label>
      <Input
       type="datetime-local"
       name="pickup_time"
       id="examplepickup_time"
       placeholder="Choose pick-up Time"
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="exampleComplete">Servings</Label>
      <Input
       type="text"
       name="servings"
       id="exampleServings"
       placeholder="Choose number of servings"
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="exampleComplete">Completed</Label>
      <Input
       type="checkbox"
       name="completed"
       id="exampleCompleted"
       onChange={handleChange}
      />
     </FormGroup>
     <Button>Submit Request</Button>
    </Form>
   </div>
   <div>
    <h1>Current Requests</h1>
    <p>
     Map over data once able to get a response back from the server in order to
     see any open requests currently. example:
    </p>
   </div>
  </div>
 );
};

const mapStateToProps = ({ business: businessReducer }) => ({
    business_id: businessReducer.business_id
})

export default connect(mapStateToProps, {})(BusinessDashboard);
