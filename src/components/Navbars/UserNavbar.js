import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

class UserNavbar extends Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="main-navbar">
          <Container fluid>
            <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              {this.props.brand}
            </Link>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
            <UncontrolledDropdown nav>
<DropdownToggle className = "pr-0" nav>
    <Media className= " align-items-center">

    </Media>
</DropdownToggle>
            </UncontrolledDropdown>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default UserNavbar;