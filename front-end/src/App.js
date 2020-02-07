import React from "react";
import "./css/App.css";
import RequestsCard from "./components/Requests/RequestsCard";
import LoginForms from "./components/LoginForms";
import BusinessForm from "./components/Business/BusinessForm";
import VolunteerRegister from "./components/Volunteer/VRegisterForm";
import SignUp from "./components/SignUp";
import BusinessFillForm from "./components/Business/BusinessFillForm";

function App() {
 return (
  <main>
   <nav>
    <p className="future-image">The "logo" will be here</p>
    <h1>Replate</h1>
    <h2>Logins</h2>
   </nav>
   <LoginForms />
   <SignUp />
   <RequestsCard />
   <BusinessForm />
   <VolunteerRegister />
   <BusinessFillForm />
   
  </main>
 );
}

export default App;
