import React from "react";
import Header from "../components/Header/index";
import Info from "../components/Info";
import Resources from "../components/Resources";
import {Container} from "react-bootstrap";

const Home = () => {
    return(
        <>
        <Header />
        <Container className="main">
        <Info />
        <Resources />
        </Container>
        </>
    )
}

export default Home;