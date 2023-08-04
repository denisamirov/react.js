import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
        .then(data => {
            console.log(data)
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
        <Form onSubmit={handleSubmit}>
            <Form.Control as="textarea" rows={3} onChange={handleDateChange}/>
            <Button variant="primary" type="submit"> create </Button>

        </Form>
    </>
  )
}
