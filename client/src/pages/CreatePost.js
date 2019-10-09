import React from "react";
import { Container } from "react-bootstrap";
import Navigation from  "../components/Nav";
import BlogEditor from "../components/BlogEditor";

const CreatePost = () => {
    return (
        <>
        <Navigation />
        <Container>
        <BlogEditor />
        </Container>
        </>
    )
}

export default CreatePost;