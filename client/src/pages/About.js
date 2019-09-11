import React from "react";
import { Link } from "react-router-dom";
import posed from 'react-pose';

const Container = posed.div({
    enter: { staggerChildren: 50 }
});

const P = posed.p({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
});

const About = () => {
    return (
        <Container>
            <div className="page-content">
                <h2>About</h2>
                <div className="row">
                    <div className="four columns">
                        <img src="https://picsum.photos/300/200/?blur" alt="Healthy People" />
                    </div>
                    <div className="eight columns">
                        <h3>Meet Your Mentor</h3>
                        <P>Information about you and your story.</P>
                        <P>Stuff that is relevannt and interesting.</P>
                        <h3>My Philosopy</h3>
                        <P>Say more about your philosohpy</P>
                        <P>Why its important.</P>
                    </div>
                </div>
                <h4>Get more info!</h4>
                <P><Link to="/contact">Get some freebies!</Link></P>
            </div>
        </Container>
    )
}

export default About;