import React from "react";

//import css
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

// User Comp
import Checks from "./views/dashboard/Checks";
import Dashboard from "./views/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Support from "./views/dashboard/Support";
import DashboardCheck from "./views/dashboard/DashboardCheck";
import Pro from "./views/dashboard/Pro";
import Upgrade from "./views/dashboard/Upgrade";

import Documentation from "./views/dashboard/Documentation";

import UserLayout from "./layouts/UserLayout"


const App = () => {
  return (

    <>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <UserLayout
              component={Dashboard}
              checkType={"new"}
              cards={[
                {
                  cardTitle: "Total Checks",
                  cardIcon: "ni ni-active-40",
                  iconBg: "gradient-red",
                  data: "350",
                  changeColor: "text-success mr-2",
                  change: "fa fa-plus",
                  changeNumber: "5 New Checks",
                  since: "Since Last Month",
                },
                {
                  cardTitle: "Total Active Checks",
                  cardIcon: "ni ni-chart-pie-35",
                  iconBg: "gradient-orange",
                  data: "250",
                  changeColor: "text-success mr-2",
                  change: "fa fa-arrow-up",
                  changeNumber: "3.48%",
                  since: "Since Last Month",
                },
                {
                  cardTitle: "Uptime Ratio",
                  cardIcon: "ni ni-chart-bar-32",
                  iconBg: "gradient-info",
                  data: "90 %",
                  changeColor: "text-success mr-2",
                  change: "fa fa-arrow-up",
                  changeNumber: "2.2%",
                  since: "Since Last Month",
                },
              ]}
              checkData={[
                {
                  name: "Random Text",
                  protocol: "HTTP",
                  method: "GET",
                  successCodes: "200, 201, 202",
                  timeOut: "3",
                  statusLastChanged: "30 mins ago",
                  icon: "check",
                  messageStatus: "success",
                  status: "Up",
                },
                {
                  name: "Random Text2",
                  protocol: "HTTPS",
                  method: "POST",
                  successCodes: "200, 201, 202",
                  timeOut: "5",
                  statusLastChanged: "3 mins ago",
                  icon: "times",
                  messageStatus: "warning",
                  status: "Down",
                },
              ]}
            />
          </Route>
          <Route exact path="/dashboard/checks">
            <UserLayout
              component={Checks}
              activeCheckData={[
                {
                  id: 1,
                  name: "Random Text",
                  protocol: "HTTP",
                  method: "GET",
                  successCodes: "200, 201, 202",
                  timeOut: "3",
                  statusLastChanged: "30 mins ago",
                  icon: "check",
                  messageStatus: "success",
                  status: "Up",
                },
                {
                  id: 2,
                  name: "Random Text",
                  protocol: "HTTP",
                  method: "GET",
                  successCodes: "200",
                  timeOut: "3",
                  statusLastChanged: "30 mins ago",
                  icon: "times",
                  messageStatus: "warning",
                  status: "Down",
                },
                {
                  id: 3,
                  name: "Random API",
                  protocol: "HTTP",
                  method: "GET",
                  successCodes: "200, 201, 202",
                  timeOut: "13",
                  statusLastChanged: "3 mins ago",
                  icon: "check",
                  messageStatus: "success",
                  status: "Up",
                },
              ]}
              pausedCheckData={[
                {
                  id: 1,
                  name: "Random Text",
                  protocol: "HTTP",
                  method: "GET",
                  successCodes: "200, 201, 202",
                  timeOut: "3",
                  statusLastChanged: "30 mins ago",
                  icon: "pause",
                  messageStatus: "warning",
                  status: "Paused",
                },
                {
                  id: 2,
                  name: "Random Text",
                  protocol: "HTTP",
                  method: "GET",
                  successCodes: "200",
                  timeOut: "3",
                  statusLastChanged: "30 mins ago",
                  icon: "pause",
                  messageStatus: "warning",
                  status: "Paused",
                },
                {
                  id: 3,
                  name: "Random API",
                  protocol: "HTTP",
                  method: "GET",
                  successCodes: "200, 201, 202",
                  timeOut: "13",
                  statusLastChanged: "3 mins ago",
                  icon: "pause",
                  messageStatus: "warning",
                  status: "Paused",
                },
              ]}
            />
          </Route>

          <Route exact path="/dashboard">
            <UserLayout
              component={Dashboard} />

          </Route>
          <Route exact path="/dashboard/support">
            <UserLayout
              component={Support}
              supportData={[
                {
                  id: "198623",
                  category: "Check",
                  createdAt: "25/11/2020",
                  subject: "Unable to add check",
                  desc: "Description goes here",
                  type: "Technical Issue",
                  severity: "High",
                  status: "Open",
                },
                {
                  id: "912454",
                  category: "Account",
                  createdAt: "25/11/2020",
                  subject: "Not getting alerts",
                  desc: "Description goes here",
                  type: "Technical Issue",
                  severity: "High",
                  status: "In Progress",
                },
              ]}
              heading={true}
              mainHeading="Support Center"
              headingDesc="Each and every one of our customer care agents have a mission to assist all your needs in order to help you with our application related issues. Please raise a support case with detail description of the issues. One of our customer care agent will reach out to you at the earliest and try to fix the issue."
            />
          </Route>
          <Route exact path="/dashboard/checks/:id">
            <UserLayout
              component={DashboardCheck}
              showCards={true}
              checkType="edit"
              cards={[
                {
                  cardTitle: "Downtime",
                  cardIcon: "ni ni-watch-time",
                  iconBg: "gradient-red",
                  data: "0.01%",
                  changeColor: "text-danger mr-2",
                  change: "fa fa-arrow-down",
                  changeNumber: "(1 Outage)",
                  since: "Since Last Month",
                },
                {
                  cardTitle: "Uptime",
                  cardIcon: "ni ni-sound-wave",
                  iconBg: "gradient-orange",
                  data: "99.9%",
                  changeColor: "text-success mr-2",
                  change: "fa fa-arrow-up",
                  changeNumber: "(1 Outage)",
                  since: "Since Last Month",
                },
                {
                  cardTitle: "Response TIme",
                  cardIcon: "ni ni-delivery-fast",
                  iconBg: "gradient-green",
                  data: "114ms",
                  changeColor: "text-muted mr-2",
                  change: "",
                  changeNumber: "(Min: 112ms , Max : 116ms)",
                  since: "",
                },
              ]}
              checkLogs={[
                {
                  icon: "check",
                  messageStatus: "success",
                  status: "Up",
                  time: "27-12-2020 11:59:14 AM",
                  statusLastChanged: "1m ago",
                  responseTime: "112 ms",
                },
                {
                  icon: "times",
                  messageStatus: "warning",
                  status: "Down",
                  time: "27-12-2020 11:59:14 AM",
                  statusLastChanged: "10m ago",
                  responseTime: "115 ms",
                },
              ]}
            />
          </Route>
          <Route exact path="/profile">
            {/* <UserLayout component={Profile} /> */}
          </Route>
          <Route exact path="/docs">
            <UserLayout component={Documentation} />
          </Route>
          <Route exact path="/upgrade">
            <UserLayout component={Upgrade} />
          </Route>
          <Route exact path="/pro">
            <UserLayout
              component={Pro}
              heading={true}
              mainHeading="Make your Payment"
              headingDesc="Please enter the details below.."
            />
          </Route>


        </Switch>

      </Router>
    </>

  );
};

export default App;