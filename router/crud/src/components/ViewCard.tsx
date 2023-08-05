import { useParams } from "react-router"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import myFetch from "./myFetch";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


export const ViewCard = () => {
    const {id} = useParams();
    const [state, setState] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
      const dataFetch = async() => {
        try {
            const res = await fetch(`http://localhost:7070/posts/${id}`)
            const data = await res.json()
            setState(data.post)
        }
        catch (e) {
            console.error(e)
        }
      }

      dataFetch()
    
    }, [])

    const handleDelete = () => {
      const dataForFetch = {
        url: `http://localhost:7070/posts/${id}`,
        method: 'DELETE',
        content: '',
        body: ''
      }
  
      myFetch(dataForFetch); 
      return navigate("/")
    }

  const handleEdit = () => {
        return navigate(`/posts/edit/${id}`)
  }


  return (
    <div>
        <div className="mainView">
          
              <Card className="cardView">
              <Button className="buttonClose2" onClick={() => {navigate("/")}}>x</Button>
                <Row>
                  <Col>
                    <Card.Text>
                      {state.content}
                    </Card.Text>
                  </Col>
                </Row>
                <div className="btn-view-row">
                    <Button className="btn-view btn" onClick = {() => handleEdit()}>Edit</Button>
                    <Button className="btn btn-danger btn-view" onClick = {() => handleDelete()}>Delete</Button>
                </div>
              </Card>
          </div>
    </div>
  )
}
