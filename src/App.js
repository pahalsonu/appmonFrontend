import React from "react";
import AuthLayout from "./layouts/AuthLayout";

import Login from "./views/Auth/Login";

import { BrowserRouter as Router } from "react-router-dom";

import UserNavbar from "./components/Navbars/UserNavbar"
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

const App = () => {
  return (
    <Router>
      {/* <AuthLayout component={Login} /> */}
      <UserNavbar />
    </Router>
  );
};

export default App;