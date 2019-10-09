import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
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
                    <LinkContainer to="/about">
                    <Button variant="info" size="lg">About Me</Button> 
                    </LinkContainer>
                    </div>
                    <div className="col-md-4 col-sm-12 justify-content-center">
                    <LinkContainer to="/contact">
                    <Button variant="info" size="lg" href="/contact">Contact</Button>
                    </LinkContainer>
                    </div>
                    <div className="col-md-4 col-sm-12 justify-content-center">
                    <LinkContainer to="/services">
                    <Button variant="info" size="lg" href="/services">Services</Button>
                    </LinkContainer>
                    </div>
                </div>
            </Container>
        </Jumbotron>
    )
}

export default Header;