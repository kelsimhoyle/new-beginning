import React from "react";
import Navigation from  "../components/Nav";
import { Container } from "react-bootstrap";

const Contact = () => {
    return (
        <>
        <Navigation />
        <Container>
            <h2>Enhance your wellness. Enrich your life.</h2>
            <p>Contact me to learn more about how we can work together to help you reach your wellness goals.</p>
            <a href="tel:972-302-1541">(972) 302 - 1541</a>
        </Container>
        </>
    )
}

export default Contact;