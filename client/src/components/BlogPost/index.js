import React from "react";
import { Container, Row } from "react-bootstrap";
import "./style.scss";

const BlogPost = props => {
return (
<>
    {props.content? (
        <>
        <div className="blog-post">
        <Row><h2>{props.header}</h2></Row>
        <Row>
            {props.content}
        </Row>
        </div>
        </>) : 
        
        <div className="blog-post">
            <Row><h2 className="blog-title">Blog Coming Soon</h2></Row>
            <Row className="blog-content"><p style={{margin: "auto"}}>Check back to see posts!</p></Row>
        </div>
    }
    </>
    
)
}

export default BlogPost;