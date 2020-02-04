import React from "react";
import "./App.css";
import RequestsCard from "./components/RequestsCard";
import Requests from "./components/Requests";

function App() {
 return (
  <main>
   <nav>
    <p className="future-image">The "logo" will be here</p>
    <h1>Replate</h1>
    <h2>Logins</h2>
   </nav>
   <LoginForms />
  </main>
 );
}

export default App;
