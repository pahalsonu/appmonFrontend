import React from "react";

//import css
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

import { BrowserRouter as Router } from "react-router-dom";
import UserLayout from "./layouts/UserLayout"


const App = () => {
  return (

    <>
      <Router>
        <UserLayout />
   
      </Router>
    </>

  );
};

export default App;