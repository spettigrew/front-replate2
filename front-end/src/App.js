import React from "react";
import "./css/App.css";
import RequestsCard from "./components/Requests/RequestsCard";
import LoginForms from "./components/LoginForms";

function App() {
 return (
  <main>
   <nav>
   </nav>
   <LoginForms />
   <RequestsCard />
  </main>
 );
}

export default App;
