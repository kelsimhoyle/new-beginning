import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo-shadow.png";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <LinkContainer to="/blog">
                                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/recipes">
                                <NavDropdown.Item href="#action/3.2">Recipes</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/tips">
                                <NavDropdown.Item href="#action/3.3">Tips</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}

export default Navigation;