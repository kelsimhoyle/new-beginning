import React from "react";
import { Link } from "react-router-dom";
// import posed from 'react-pose';

// const Container = posed.div({
//     enter: { staggerChildren: 50 }
// });

// const P = posed.p({
//     enter: { x: 0, opacity: 1 },
//     exit: { x: 50, opacity: 0 }
// });

const About = () => {
    return (
        // <Container>
            <div className="page-content container">
                <h2>About</h2>
                <div className="row">
                    <div className="four columns">
                        <img src="https://picsum.photos/300/200/?blur" alt="Healthy People" />
                    </div>
                    <div className="eight columns">
                        <h3>Meet Your Mentor</h3>
                        <p>Information about you and your story.</p>
                        <p>Stuff that is relevannt and interesting.</p>
                        <h3>My Philosopy</h3>
                        <p>Say more about your philosohpy</p>
                        <p>Why its important.</p>
                    </div>
                </div>
                <h4>Get more info!</h4>
                <p><Link to="/contact">Get some freebies!</Link></p>
            </div>
        // </Container>
    )
}

export default About;