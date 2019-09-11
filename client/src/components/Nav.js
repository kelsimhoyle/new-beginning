import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo-shadow.png";

const Nav = () => {
    return (
        <div className="nav row">
            <div className="one-third column">
                <img src={logo} className="nav-logo" alt="Hummingbird Logo" />
            </div>
            <div className="two-thirds column right">
                <ul className="nav">
                    <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="nav-item"><NavLink to="/blog">Blog</NavLink></li>
                    <li className="nav-item"><NavLink to="/tips">Healthy Tips</NavLink></li>
                    <li className="nav-item"><NavLink to="/recipes">Recipes</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;