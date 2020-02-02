import React from 'react';
import './VolunteerRegisterApp.css';
import VolunteerRegister from "./components/VRegisterForm.js";

function VolunteerRegisterApp() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the volunteer Register form
        </p>
        <VolunteerRegister />
      </header>
    </div>
  );
}

export default VolunteerRegisterApp;
