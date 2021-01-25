import React, { Component } from 'react'

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap"

export default class AuthFooter extends Component {
    render() {
        return (
            <>
                <footer className='py-5'>
                    <Container>
                        <Row className="align-item-center justify-content-xl-between">
                            <Col xl="6">
                                <div className="copyright text-center text-xl-left lext-muted">
                                    &169; 2021
                                <a className="nav-footer justify-content-xl-end just-content-center" href="https://pahalsonu.com" target='blank'
                                        rel="noreferrer">
                                        The Hacking School
                                </a>

                                </div>
                            </Col>
                            <Col xl="6">
                                <Nav className='nav-footer justify-content-center justify-content-xl-end'>
                                    <NavItem>
                                        <NavLink href="https://pahalsonu.com" target='blank'>
                                            About US

                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://pahalsonu.com" target='blank'>
                                            License

                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        )
    }
}
