import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title:"",
    description:"",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    setPost(prev => {
      return({
        ...prev,
        [name]:value,
      })
    })
  }

const handleClick = (event) => {
  event.preventDefault();
  console.log(post)

axios
.post("http://localhost:3001/create", post)
.then((res) => console.log(res))
.catch((err) =>console.log(err));
navigate("posts")

 };

  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Create Post</h1>
      <Form>
        <Form.Group>
          <Form.Control
            name="title"
            value={post.title}
            placeholder="title"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />

          <Form.Control
            name="description"
            value={post.description}
            placeholder="des"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
        </Form.Group>
        <Button onClick={handleClick}>Create Post</Button>
      </Form>
      <Button
        style={{ width: "100%" }}
        variant="outline-dark"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
}

export default CreatePost;
