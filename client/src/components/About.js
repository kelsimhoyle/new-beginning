import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = ({contact}) => {
    return (
        <div className="home-content">
            <h2>About</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src="https://picsum.photos/300/200/?blur" alt="Healthy People" />
                </div>
                <div className="col-md-8 ">
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