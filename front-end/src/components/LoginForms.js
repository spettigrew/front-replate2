import React, {useState} from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForms = () =>{


  return (
    <div className="login-page">
      <Card>
        <CardBody>
        <CardHeader tag="h3">Business Login</CardHeader >
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
        </Card>
        <Card>
        <CardBody>
        <CardHeader tag="h3">Volunteer Login</CardHeader >
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
        </Card>
      </div>
  );
}

export default LoginForms;
