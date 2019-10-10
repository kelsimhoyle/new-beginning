import React, { useState} from "react";
import ReactQuill, {Toolbar} from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import { Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "../../useForm";


const BlogEditor = () => {

    const [values, handleChange] = useForm({title: "", post: ""})
    const [text, setText] = useState("");
    const handleTextChange = value => setText(value);
    const [post, setPost] = useState("");

    const submit = () => {
        console.log(text)
        console.log(values.post)
        console.log(values.title)
    }

   const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean'],
        ],
      }

return(
    <>
    <Form.Control
            required
            type="text"
            placeholder="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
    <ReactQuill value={text} onChange={handleTextChange} modules={modules} />
    <Row>
    <Col>
    <Form.Group controlId="post-type">
    <Col>
    <Form.Label>Post Type</Form.Label>
    </Col>
    <Form.Control as="select" name="post" required value={values.post} onChange={handleChange}>
        {/* <option>Choose a Post Type</option> */}
      <option value="blog">Blog Post</option>
      <option value="recipe">Recipe</option>
      <option value="tip">Tip</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col>
    <Button onClick={submit}>Submit</Button>
    </Col>
    </Row>
    
    </>
);
}

export default BlogEditor;