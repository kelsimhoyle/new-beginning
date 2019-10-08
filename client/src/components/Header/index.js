import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const jumbotronBg = {
    backgroundImage: "url('../images/home-bg.jpg')",
    backgroundSize: "100%",
    backgroundPosition: "left bottom"
}

const Header = () => {
    return (
        <Jumbotron fluid style={jumbotronBg}>
            <Container>
                <h1 className="text-center">Health Coaching To Improve Your Life</h1>
                <p className="text-center">A new beginning to your healthy lifestyle!</p>
                <div className="row text-center buttons">
                    <div className="col-md-4 col-sm-12 justify-content-center">
                    <Button variant="info" size="lg" href="/about">About Me</Button> 
                    </div>
                    <div className="col-md-4 col-sm-12 justify-content-center">
                    <Button variant="info" size="lg" href="/contact">Contact</Button>
                    </div>
                    <div className="col-md-4 col-sm-12 justify-content-center">
                    <Button variant="info" size="lg" href="/services">Services</Button>
                    </div>
                </div>
            </Container>
        </Jumbotron>
    )
}

export default Header;