import React, { Component } from "react";

import UserNavbar from "../components/Navbars/UserNavbar";
import Sidebar from "../components/Sideabar/Sidebar";
import UserHeader from "../components/Headers/UserHeaders";
import UserFooter from "../components/Footers/UserFooter";

class UserLayout extends Component {
  render() {
    const Component = this.props.component
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
          <UserHeader {...this.props} />
          <Component
            {...this.props}
          />
          <UserFooter />

        </div>
      </>
    );
  }
}

export default UserLayout;