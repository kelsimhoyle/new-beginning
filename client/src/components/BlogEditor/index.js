import React, { useState} from "react";
import ReactQuill, {Toolbar} from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import { Button } from "react-bootstrap";

const BlogEditor = () => {
    const [text, setText] = useState("");
    const handleChange = value => setText(value);

    const submit = () => {
        console.log(text)
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
    <ReactQuill value={text} onChange={handleChange} modules={modules} />
    <Button onClick={submit}>Submit</Button>
    </>
);
}

export default BlogEditor;