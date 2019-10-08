import React from "react";
import Header from "../components/Header/index";
import Info from "../components/Info";
import Resources from "../components/Resources";

const Home = () => {
    return(
        <>
        <Header />
        <div className="container">
        <Info />
        <Resources />
        </div>
        </>
    )
}

export default Home;