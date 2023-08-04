import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import {useEffect} from 'react';
import { Card } from 'react-bootstrap';


export const Cards = () => {

  const [state, setState] = useState([])
  useEffect(() => {
    const dataFetch = async() => {
      try {
          const res = await fetch('http://localhost:7070/posts')
          const data = await res.json()
          setState(data)
      }
      catch (e) {
          console.error(e)
      }
  }
  dataFetch()
    
  })

  return (
    <>
      <div>
          <Link to="/posts/new">
            <Button>Create post</Button>
          </Link>
          <div>
            {state.map((i, index) => 
              <Card key={index}>
                <Card.Text>
                  {i.content}
                </Card.Text>
                <Link to={`/posts/${i.id}`}>Подробнее</Link>
              </Card>)}
          </div>
      </div>
    </>
  )
}
