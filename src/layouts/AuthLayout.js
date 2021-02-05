import React, { Component } from "react";

import { Row, Container } from "reactstrap";

// Reusable Components
import AuthNavbar from "../components/Navbars/AuthNavbar";
import AuthHeader from "../components/Headers/AuthHeaders";
import AuthFooter from "../components/Footers/AuthFooters";

class AuthLayout extends Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  render() {
    const Component = this.props.component;
    return (
      <>
        <div className="main-content">
          <AuthNavbar />
          <AuthHeader />
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Component />
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default AuthLayout;