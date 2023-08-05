
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import myFetch from "./myFetch";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


export const Edit = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dataFetch = async() => {
      try {
          const res = await fetch(`http://localhost:7070/posts/${id}`)
          const response = await res.json()
          setData(response.post.content)
          handleFormStart(response.post);
      }
      catch (e) {
          console.error(e)
      }
    }

    dataFetch()
  
  }, [])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForFetch = {
      url: `http://localhost:7070/posts/${id}`,
      method: 'PUT',
      content: 'application/json',
      body: JSON.stringify({content: data})
    }

    myFetch(dataForFetch); 
    return navigate("/")
  }

  const handleDateChange = (e: React.FormEvent<HTMLFormElement>) => {
    setData(e.target.value);
  };

  const handleFormStart = (dat) => {
    document.getElementById('textCreate').value = dat.content
  }

  return (
    <div>
        <Form onSubmit={handleSubmit} className='form'>
          <Row>
            <Col className="createForm">
            <Button className="buttonClose" onClick={() => {navigate("/")}}>x</Button>
              <Form.Control as="textarea" id="textCreate" rows={3} onChange={handleDateChange}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit" id="createButton"> save </Button>
            </Col>
          </Row>
        </Form>
    </div>
  )
}
