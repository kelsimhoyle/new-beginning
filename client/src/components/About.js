import React from "react";
import { Link } from "react-router-dom";

const About = ({contact}) => {
    return (
        <div className="home-content">
            <h2>About</h2>
            <div className="row">
                <div className="four columns">
                    <img src="https://picsum.photos/300/200/?blur" alt="Healthy People" />
                </div>
                <div className="eight columns">
                    <h4>Meet Your Mentor</h4>
                    <p>Information about you and your story.</p>
                    <p>Stuff that is relevannt and interesting.</p>
                    <h4>My Philosopy</h4>
                    <p>Say more about your philosohpy</p>
                    <p>Why its important.</p>
                </div>
            </div>
            <h5>Get more info!</h5>
            <p><Link to="/contact">Get some freebies!</Link></p>
        </div>
    )
}

export default About;