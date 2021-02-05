import React, { Component } from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";
import { Row, Col, Container, Nav, NavItem, NavLink } from "reactstrap";

class UserFooter extends Component {
  render() {
    return (
      <footer>
        <Container fluid>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © 2021{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://appmon1.herokuapp.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Appmon
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink to="/dashboard" tag={NavLinkRRD}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/dashboard" tag={NavLinkRRD}>
                    Term & Conditions
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default UserFooter;