<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./utils/reducer";

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VolunteerRegisterApp from './VolunteerRegisterApp/VolunteerRegisterApp.js';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<VolunteerRegisterApp />, document.getElementById('root'));

>>>>>>> bd7f60f63c1989eb0493a23710c35f3c6916d677

