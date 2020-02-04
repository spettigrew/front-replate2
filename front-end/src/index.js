import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./utils/reducer";
import VolunteerRegisterApp from "./components/Volunteer/VolunteerRegisterApp";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
 <Provider store={store}>
  <App />
  <VolunteerRegisterApp />
 </Provider>,
 document.getElementById("root")
);
