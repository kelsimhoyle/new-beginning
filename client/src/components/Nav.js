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
                            width="30"
                            height="30"
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

        // {/* <div className="nav row">
        //     <div className={`${smallScreen ? "one" : "one-third"} column ${props.menuOpen ? "closed" : ""}`}>
        //         <img src={logo} className="nav-logo" alt="Hummingbird Logo" />
        //     </div>

        //     <div className={`${smallScreen ? "eleven small" : "two-thirds columns large"}-nav columns`}>

        //         <ul className={props.menuOpen ? "open" : "closed"}>
        //             <li><div role="button" onClick={props.handleMenuClick} className="menu-icon"><IoIosMenu /></div></li>
        //             <li className="nav-item"><NavLink to="/">Home</NavLink></li>
        //             <li className="nav-item"><NavLink to="/about">About</NavLink></li>
        //             <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
        //             <li className="nav-item"><NavLink to="/blog">Blog</NavLink></li>
        //             <li className="nav-item"><NavLink to="/tips">Tips</NavLink></li>
        //             <li className="nav-item"><NavLink to="/recipes">Recipes</NavLink></li>
        //         </ul>
        //     </div>
        // </div> */}
    )
}

export default Navigation;