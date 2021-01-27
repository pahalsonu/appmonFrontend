import React, { Component } from "react";

import { Button, Container, Row, Col } from "reactstrap";

class UserHeader extends Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "60px",
            backgroundImage:
              "url(" +
              require("../../assets/img/theme/profile-cover.jpg") +
              ")",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <span className="mask bg-gradient-default opacity-8" />
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1></h1>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
