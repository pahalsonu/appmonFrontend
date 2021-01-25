import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    UncontrolledCollapse, NavbarBrand,
    Navbar, NavLink, NavItem, Nav,
    Container, Row, Col, Dropdown, DropdownItem

}
    from "reactstrap"

export default class AuthNavbar extends Component {
    render() {
        return (
            <>
                <Navbar className="navbar-top navbar-horizontal navbar-dark"
                    expand="md">
                    <Container className="px-4">
                        <NavbarBrand tag={Link} to='/'>
                            <span className="nav-link navbar-light navbar-text text-white bold">Appmon</span>
                        </NavbarBrand>
                        <button className="navbar-toggelr" id="navbar-collapse-main">
                            <span className="navbar-toggle-icon"></span>
                        </button>
                        <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
                            <div
                                className="navbar-collapse-header d-md-none">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/">Appmon
                                        </Link>
                                    </Col>
                                    <Col className='collapse-close' xs="6">
                                        <button className="navbar-toggler"
                                            id="navbar-collapse-main">
                                            <span>

                                            </span>
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to='/register' className="nav-link-icon">
                                        <span className="nav-link-innner--text">Register</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/contactus' className="nav-link-icon">
                                        <span className="nav-link-innner--text">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                                <DropdownItem divider className="d-lg-none" />
                                <NavItem>
                                    <NavLink href='https://facebook.com/appmon'>
                                        <NavItem>
                                            <i className='fab fa-facebook-square'></i>
                                            <span className='nav-link-inner--text d-lg-none' >
                                                Facebook
                                            </span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='https://instagram.com/appmon'>
                                        <NavItem>
                                            <i className='fab fa-instagram-square'></i>
                                            <span className='nav-link-inner--text d-lg-none' >
                                                Instagram
                                            </span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='https://twitter.com/appmon'>
                                        <NavItem>
                                            <i className='fab fa-twitter-square'></i>
                                            <span className='nav-link-inner--text d-lg-none' >
                                                Twitter
                                            </span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='https://github.com/appmon'>
                                        <NavItem>
                                            <i className='fab fa-github-square'></i>
                                            <span className='nav-link-inner--text d-lg-none' >
                                                Github
                                            </span>
                                        </NavItem>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} to='/register' className="nav-link-icon">
                                        <NavItem className="d-none d-lg-block ">
                                            <i className='fas fa-sign mr-2'></i>
                                            <span className='nav-link-inner--text' >
                                                Sign Up
                                            </span>
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


