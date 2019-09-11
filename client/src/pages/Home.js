import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Resources from "../components/Resources";

const Home = () => {
    return(
        <>
        <Header />
        <div className="container">
        <About />
        <Resources />
        </div>
        </>
    )
}

export default Home;