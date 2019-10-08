import React from "react";
import {Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss"
// import posed from 'react-pose';

// const Container = posed.div({
//     enter: { staggerChildren: 50 }
// });

// const P = posed.p({
//     enter: { x: 0, opacity: 1 },
//     exit: { x: 50, opacity: 0 }
// });

const Info = () => {
    return (
        <>
            <div className="page-content container">
                <Row><h2 className="section-title">About</h2></Row>
                <Row>
                    <Col xs={12} md={4}>
                        <img src="https://picsum.photos/300/200/?blur" alt="Healthy People" />
                    </Col>
                    <Col xs={12} md={8}>
                        <h3>Meet Your Mentor</h3>
                        <p>Information about you and your story.</p>
                        <p>Stuff that is relevannt and interesting.</p>
                        <h3>My Philosopy</h3>
                        <p>Say more about your philosohpy</p>
                        <p>Why its important.</p>
                    </Col>
                </Row>
                <Row><h4 className="centered">Get more info!</h4></Row>
                <Row><p className="centered"><Link to="/contact">Get some freebies!</Link></p></Row>
            </div>
    </>
    )
}

export default Info;