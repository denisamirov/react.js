import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Create = () => {
    const [data, setData] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('http://localhost:7070/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({content: data})
        })
        .catch(err => {
            console.log(err)
        })

        return navigate("/")
    }

    const handleDateChange = (e: React.FormEvent<HTMLFormElement>) => {
        setData(e.target.value);
      };

  return (
    <> 
        <Form onSubmit={handleSubmit} className='form'>
            <Row>
                <Col className="createForm">
                <Button className="buttonClose" onClick={() => {navigate("/")}}>x</Button>
                    <Form.Control as="textarea" rows={3} onChange={handleDateChange} id="textCreate"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit" id="createButton"> create </Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}
