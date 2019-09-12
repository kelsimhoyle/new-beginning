import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
    return (
        <div className="home-content">
            <h2>Resources</h2>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h4>Blog</h4>
                    <p>Blog post info...</p>
                    <Link to="/blog">View More Blog Posts</Link>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h4>Recipes</h4>
                    <p>An example recipe</p>
                    <Link to="/recipes">View More Recipes</Link>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h4>Healthy Tips</h4>
                    <Link to="/tips">View More Healthy Tips</Link>
                </div>
            </div>
        </div>
    )
}

export default Resources;