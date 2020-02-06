import React from "react";
import "./css/App.css";
import BusinessLoginForm from "./components/Business/BusinessLoginForm";
import VolunteerLoginForm from "./components/Volunteer/VolunteerLoginForm";
import BusinessRegisterApp from "./components/Business/BusinessRegisterApp";
import VolunteerRegisterApp from "./components/Volunteer/VolunteerRegisterApp";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Requests from "./components/Requests/Requests";

function App() {
 return (
  <Provider store={store}>
   <main>
    <nav>
     <p className="future-image">The "logo" will be here</p>
     <h1>Replate</h1>
    </nav>
    <Switch>
     <Route path="/volunteer/login" render={props => <VolunteerLoginForm />} />
     <Route path="/business/login" render={props => <BusinessLoginForm />} />
     <Route
      path="/volunteer/register"
      render={props => <VolunteerRegisterApp />}
     />
     <Route
      path="/business/register"
      render={props => <BusinessRegisterApp />}
     />
     <Requests />
    </Switch>
   </main>
  </Provider>
 );
}

export default App;
