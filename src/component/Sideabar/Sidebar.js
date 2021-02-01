import React, { Component } from 'react'

import { NavLink as NavLinkRRD, Link } from "react-router-dom";

import {
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

import Logo from "../../assets/img/brand/newLogo.png";

class Sidebar extends Component {
    state = {
        collapseOpen: false,
    };
    state = {
        collapseOpen: false,
    };
    toggleCollapse = () => {
        this.setState({
            collapseOpen: !this.state.collapseOpen,
        })
    };
    closeCollapse = () => {
        this.setState({
            collapseOpen: !this.state.collapseOpen,
        });
    };

    createLinks = (routes) => {
        return routes.map((props, key) => {
            return (
                <NavItem key={key}>
                    <NavLink
                        to={props.path}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        <i className={props.icon} />
                        {props.name}
                    </NavLink>
                </NavItem>
            );
        });
    };

    render() {
        const { routes } = this.props;
        return (
            <Navbar
                className="navbar-vertical  navbar-light bg-info"
                expand="md"
                id="sidenav-main"
            >
                <Container fluid>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleCollapse}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <NavbarBrand className="pt-0" tag={NavLinkRRD} to="/dashboard">
                        <img alt="Appmon Logo" className="navbar-brand-img" src={Logo} />
                    </NavbarBrand>

                    <Nav className="align-items-center d-md-none">
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav className="nav-link-icon">
                                <i className="ni ni-bell-55" />
                            </DropdownToggle>
                            <DropdownMenu
                                aria-labelledby="navbar-default_dropdown_1"
                                className="dropdown-menu-arrow"
                                right
                            >
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Something else here</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown >
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img
                                            alt="..."
                                            src={
                                                require("../../assets/img/theme/team-1-800x800.jpg").default
                                            }
                                        />
                                    </span>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-single-02" />
                                    <span>My profile</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-settings-gear-65" />
                                    <span>Settings</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-calendar-grid-58" />
                                    <span>Activity</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-support-16" />
                                    <span>Support</span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <i className="ni ni-user-run" />
                                    <span>Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                </Container>

            </Navbar>
        )
    }
}

export default Sidebar
