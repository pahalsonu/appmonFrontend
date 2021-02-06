import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    Navbar,
    UncontrolledCollapse,
    Nav,
    NavItem,
    NavbarBrand,
    Container,
    NavLink,
    DropdownItem
} from "reactstrap"


export class AuthNavbars extends Component {
    render() {
        return (
            <>
                <Navbar expand="md" className="navbar-top navbar-horizontal navbar-dark">
                    <Container className="px-4">
                        <NavbarBrand tag={Link} to="/">
                            <span className="nav-link navbar-light navbar-text text-white bold">
                                Appmon
                            </span>
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar-collapse-main">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
                            <Nav navbar className="navbar-collapse-header d-md-none" >
                                <NavItem>
                                    <NavLink href="/" xs="6">
                                        Appmon
                                    </NavLink>
                                </NavItem>
                                <NavItem className="collapse-close" xs="6">
                                    <button
                                        className="navbar-toggler"
                                        id="navbar-collapse-main"
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/register" className="nav-link-icon">
                                        <span className="nav-link-inner--text">Register</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/contactus" className="nav-link-icon">
                                        <span className="nav-link-inner--text">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                                <DropdownItem divider className="d-lg-none" />
                                <NavItem>
                                    <NavLink
                                        href="https://www.facebook.com/appmon"
                                        className="nav-link-icon"
                                    >
                                        <NavItem>
                                            <i className="fab fa-facebook-square"></i>
                                            <span className="nav-link-inner--text d-lg-none">
                                                Facebook
                                            </span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="https://www.instagram.com/appmon"
                                        className="nav-link-icon"
                                    >
                                        <NavItem>
                                            <i className="fab fa-instagram"></i>
                                            <span className="nav-link-inner--text d-lg-none">
                                                Instagram
                      </span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        href="https://www.twitter.com/appmon"
                                        className="nav-link-icon"
                                    >
                                        <NavItem>
                                            <i className="fab fa-twitter-square"></i>
                                            <span className="nav-link-inner--text d-lg-none">
                                                Twitter
                                             </span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        href="https://www.github.com/appmon"
                                        className="nav-link-icon"
                                    >
                                        <NavItem>
                                            <i className="fab fa-github"></i>
                                            <span className="nav-link-inner--text d-md-none d-lg-none">
                                                Github
                                            </span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/register" className="nav-link-icon">
                                        <NavItem className="d-none d-lg-block">
                                            <i className="fas fa-sign mr-2"></i>
                                            <span className="nav-link-inner--text">Sign Up</span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>


                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default AuthNavbars
