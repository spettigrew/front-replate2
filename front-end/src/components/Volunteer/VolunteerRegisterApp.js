import React from "react";
import "../../css/VolunteerRegisterApp.css";
import VolunteerRegister from "../Volunteer/VRegisterForm";

function VolunteerRegisterApp() {
 return (
  <div className="App">
   <header className="App-header">
    <p>This is the volunteer Register form</p>
    <VolunteerRegister />
   </header>
  </div>
 );
}

export default VolunteerRegisterApp;
