import React from 'react';
import './LoginApp.css';
import LoginForms from "./components/LoginForms";

function LoginApp() {
  return (
    <main>
      <nav>
        <p>The "logo" will be here</p>
        <h1>Replate</h1>
        <h2>Logins</h2>
      </nav>
      <LoginForms />
    </main>
  );
}

export default LoginApp;
