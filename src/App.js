import React from "react";
import AuthLayout from "./layouts/AuthLayout";

import Login from "./views/Auth/Login";

import { BrowserRouter as Router } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

// User Comp
import UserNavbar from "./components/Navbars/UserNavbar";
import UserLayout from "./layouts/UserLayout";

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "darkblue" }}>
        <UserLayout />
      </div>
    </Router>
  );
};

export default App;