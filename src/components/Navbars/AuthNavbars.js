import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavbarBrand,
    Container,
    UncontrolledCollapse
} from "reactstrap"


export class AuthNavbars extends Component {
    render() {
        return (
            <>
                <Navbar expand="md" className="navbar-top navbar-horizontal navbar-dark">
                    <Container className="px-4">
                        <NavbarBrand  tag={Link} to="/">
                            <span className="nav-link navbar-light navbar-text text-white bold">
                                Appmon
                            </span>
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar-collapse-main">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
                            <Nav navbar className="navbar-collapse-header d-md-none" >

                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default AuthNavbars
