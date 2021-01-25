import React from "react";
import AuthNavbar from "./components/Navbars/AuthNavbar"
import AuthFooter from "./components/Footers/AuthFooter"
import { BrowserRouter as Router } from 'react-router-dom'

import "./assets/plugins/nucleo/css/nucleo.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assets/css/argon-dashboard-react.css";

const App = () => {
  return( // eslint-disable-next-line
  <Router>
    <div style={{ backgroundColor: "darkblue" }}>
      <AuthNavbar />
      <AuthFooter />
    </div>
  </Router>
)
};

export default App;
