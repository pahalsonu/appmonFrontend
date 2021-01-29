import React, { Component } from "react";

import UserNavbar from "../components/Navbars/UserNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import UserHeader from "../components/Headers/UserHeader";

class UserLayout extends Component {
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={[
            {
              path: "/dashboard",
              name: "Dashboard",
              icon: "ni ni-tv-2 text-primary",
            },
            {
              path: "/dashboard/checks",
              name: "Checks",
              icon: "ni ni-spaceship text-orange",
            },
            {
              path: "/dashboard/support",
              name: "Support",
              icon: "ni ni-chat-round text-blue",
            },
            {
              path: "/dashboard/admin",
              name: "Admin | Manage Users",
              icon: "ni ni-single-02 text-yellow",
            },

            {
              path: "/dashboard/adminSupport",
              name: "Admin | Tickets",
              icon: "ni ni-support-16 text-blue ",
            },
          ]}
        />
        <div className="main-content" ref="mainContent">
          <UserNavbar />

          <UserHeader
            checkType="edit"
            cards={[
              {
                cardTitle: "Total Checks",
                data: "350",
                iconBg: "gradient-red",
                icon: "ni ni-active-40",
                cardFooterColor: "text-success",
                statIndicator: "fa fa-plus",
                cardFooterData: "5 New Checks",
                since: "Since Last Month",
              },
              {
                cardTitle: "Total Checks",
                data: "350",
                iconBg: "gradient-red",
                icon: "ni ni-active-40",
                cardFooterColor: "text-success",
                statIndicator: "fa fa-plus",
                cardFooterData: "5 New Checks",
                since: "Since Last Month",
              },
              {
                cardTitle: "Total Checks",
                data: "350",
                iconBg: "gradient-red",
                icon: "ni ni-active-40",
                cardFooterColor: "text-success",
                statIndicator: "fa fa-plus",
                cardFooterData: "5 New Checks",
                since: "Since Last Month",
              },
            ]}
          />
        </div>
      </>
    );
  }
}

export default UserLayout;
