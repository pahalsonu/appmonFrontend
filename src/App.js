import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

import AuthLayout from "../src/layouts/AuthLayout"
import Register from "./views/Auth/Register"

const App = () => {
  return (

    <Router> <Switch>

      <Route exact path="/register"  >
        <AuthLayout component={Register}/>
      </Route>

    </Switch></Router>

   

  )
};

export default App;
