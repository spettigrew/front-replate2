import React from "react";
import "./css/App.css";
import RequestsCard from "./components/Requests/RequestsCard";
import LoginForms from "./components/LoginForms";

function App() {
 return (
  <main>
   <nav>
    <p className="future-image">The "logo" will be here</p>
    <h1>Replate</h1>
    <h2>Logins</h2>
   </nav>
   <LoginForms />
   <RequestsCard />
  </main>
 );
}

export default App;
