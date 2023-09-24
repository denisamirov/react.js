import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux/"
import { Preloader } from './Preloader'


export const Details = () => {

  const detail = useSelector(state => state.cards.detail)

  return (
    <>
      { detail != undefined ?
          <Card style={{ width: '18rem' }} key={detail.id}>
          <Card.Body>
            <Card.Title>{detail.name}</Card.Title>
            <Card.Text>{detail.content}</Card.Text>
            <Card.Text>{detail.price}</Card.Text>
          </Card.Body>
        </Card> : <Preloader />
      }
    </>
  )
}
