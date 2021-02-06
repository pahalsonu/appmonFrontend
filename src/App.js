import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";


import AuthNavbar from "./components/Navbars/AuthNavbars"


const App = () => {
  return (

    <Router> <Switch>

      <Route >
        <AuthNavbar />
      </Route>

    </Switch></Router>

   

  )
};

export default App;
