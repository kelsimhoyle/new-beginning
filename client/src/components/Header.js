import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const jumbotronBg = {
    backgroundImage: "url('../images/home-bg.jpg')",
    backgroundSize: "100%",
    height: "100vh"
}

const Header = () => {
    return (
        <Jumbotron fluid style={jumbotronBg}>
            <Container>
                <h1>Health Coaching To Improve Your Life</h1>
                <p>
                    A new beginning to your healthy lifestyle!
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Header;