import React from "react";
import { Container } from "react-bootstrap";
import Navigation from  "../components/Nav";
import BlogPost from "../components/BlogPost";

const Blog = () => {
    return (
        <>
        <Navigation />
        <Container>
        <BlogPost />
        </Container>
        </>
    )
}

export default Blog;