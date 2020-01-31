import React, {useState} from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForms = () =>{


  return (
    <div className="login-page">
      <div classname="login-card">
        <CardHeader tag="h3">Business Login</CardHeader >
        <CardBody>
            <Form>
              <FormGroup>
                <Label for="email" hidden>Email </Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="password" hidden>Password </Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>
              {' '}
              <Button>Log in</Button>
          </Form>
        </CardBody>
        </div>
        <div classname="login-card">
        <CardHeader tag="h3">Volunteer Login</CardHeader >
        <CardBody>
            <Form>
              <FormGroup>
                <Label for="email" hidden>Email </Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="password" hidden>Password </Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>
              {' '}
              <Button>Log in</Button>
          </Form>
        </CardBody>
        </div>
      </div>
  );
}

export default LoginForms;
