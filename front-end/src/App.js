import React from "react";
import "./css/App.css";
import BusinessLoginForm from "./components/Business/BusinessLoginForm";
import VolunteerLoginForm from "./components/Volunteer/VolunteerLoginForm";
import BusinessRegisterApp from "./components/Business/BusinessRegisterApp";
import VolunteerRegisterApp from "./components/Volunteer/VolunteerRegisterApp";
import BusinessDashboard from "./components/Business/BusinessDashboard";
import VolunteerDashboard from "./components/Volunteer/VolunteerDashboard";
import Requests from "./components/Requests/Requests";
import { Route, Switch } from "react-router-dom";

function App() {
 return (
  <main>
   <nav>
    <p className="future-image">The "logo" will be here</p>
    <h1>Replate</h1>
   </nav>
   <Switch>
    <Route path="/volunteer/login" render={props => <VolunteerLoginForm />} />
    <Route path="/volunteer/home" render={props => <VolunteerDashboard />} />
    <Route path="/business/login" render={props => <BusinessLoginForm />} />
    <Route path="/business/home" render={props => <BusinessDashboard />} />
    <Route path="/requests" render={props => <Requests />} />
    <Route
     path="/volunteer/register"
     render={props => <VolunteerRegisterApp />}
    />
    <Route
     path="/business/register"
     render={props => <BusinessRegisterApp />}
    />
   </Switch>
  </main>
 );
}

export default App;
