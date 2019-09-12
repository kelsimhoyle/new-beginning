import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const jumbotronBg = {
    backgroundImage: "url('../images/home-bg.jpg')",
    backgroundSize: "100%",
}

const Header = () => {
    return (
        <Jumbotron fluid style={jumbotronBg}>
            <Container>
                <h1>Health Coaching To Improve Your Life</h1>
                <p>A new beginning to your healthy lifestyle!</p>
                <div className="row">
                    <div className="col-md-4 col-sm-12"><h3><Link to="/about">About Me</Link></h3></div>
                    <div className="col-md-4 col-sm-12"><h3><Link to="/contact">Contact</Link></h3></div>
                    <div className="col-md-4 col-sm-12"><h3><Link to="/services">Learn More</Link></h3></div>
                </div>
            </Container>
        </Jumbotron>
    )
}

export default Header;