import React from "react";

//import css
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

// User Comp
import Checks from "./views/User/Checks";

import { BrowserRouter as Router } from "react-router-dom";
import UserLayout from "./layouts/UserLayout"


const App = () => {
  return (

    <>
      <Router>
        <UserLayout 
        Component={Checks}
        // heading={true}
        mainHeading={"Hello Admin"}
        headingDesc={"Please click on a row to view/update the details"}
        checkType="new"
        // cards={[
        //   {
        //     cardTitle: "Total Checks",
        //     data: "350",
        //     iconBg: "gradient-red",
        //     icon: "ni ni-active-40",
        //     cardFooterColor: "text-success",
        //     statIndicator: "fa fa-plus",
        //     cardFooterData: "5 New Checks",
        //     since: "Since Last Month",
        //   },
        //   {
        //     cardTitle: "Total Checks",
        //     data: "350",
        //     iconBg: "gradient-red",
        //     icon: "ni ni-active-40",
        //     cardFooterColor: "text-success",
        //     statIndicator: "fa fa-plus",
        //     cardFooterData: "5 New Checks",
        //     since: "Since Last Month",
        //   },
        //   {
        //     cardTitle: "Total Checks",
        //     data: "350",
        //     iconBg: "gradient-red",
        //     icon: "ni ni-active-40",
        //     cardFooterColor: "text-success",
        //     statIndicator: "fa fa-plus",
        //     cardFooterData: "5 New Checks",
        //     since: "Since Last Month",
        //   },
        // ]}
        />
   
      </Router>
    </>

  );
};

export default App;