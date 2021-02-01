import React from "react";

//import css
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

import { BrowserRouter as Router } from "react-router-dom";
import UserNavbar from "./component/Navbars/UserNavbar"
const App = () => {
  return (

    <>
    <Router>
      <UserNavbar />
      </Router>
    </>

  );
};

export default App;