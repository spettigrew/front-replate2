import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
export default function SignUp() {
 return (
  <div className="signup-wrapper">
   <div className="replate">
    <h5>Replate</h5>
   </div>
   <div className="signup-header">
    <h1>Sign Up</h1>
   </div>
   <div className="business-signup">
    <h2>Business Sign-Up</h2>
    <Link to="/business/register">
     <Button renderas="button">
      <span>Sign-Up</span>
     </Button>
    </Link>
   </div>
   <div className="volunteer-signup">
    <h2>Volunteer Sign-Up</h2>

    <Link to="/volunteer/register">
     <Button renderas="button">
      <span>Sign-Up</span>
     </Button>
    </Link>
   </div>
   <div className="signup-header">
    <h1>Login</h1>
   </div>
   <div className="business-login">
    <h2>Business Login</h2>

    <Link to="/business/login">
     <Button renderas="button">
      <span>Login</span>
     </Button>
    </Link>
   </div>
   <div className="volunteer-login">
    <h2>Business Dashboard</h2>

    <Link to="/business">
     <Button renderas="button">
      <span>Business</span>
     </Button>
    </Link>
   </div>

   <div className="volunteer-login">
    <h2>Volunteer Login</h2>

    <Link to="/volunteer/login">
     <Button renderas="button">
      <span>Login</span>
     </Button>
    </Link>
   </div>
   <footer>Copyright Replate @ 2020</footer>
  </div>
 );
}
