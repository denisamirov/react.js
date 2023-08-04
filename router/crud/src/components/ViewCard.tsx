import { useParams } from "react-router"
import { useEffect } from "react";
import { useState } from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const ViewCard = () => {
    const {id} = useParams();
    console.log(id);

    const [state, setState] = useState([])
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

  return (
    <div>
        <div>
              <Card>
                <Card.Text>
                  {state.content}
                </Card.Text>
                <Button className="btn btn-danger">Edit</Button>
                <Button className="btn btn-danger">Delete</Button>
              </Card>
          </div>
    </div>
  )
}
