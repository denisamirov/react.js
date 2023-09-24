import { useDispatch, useSelector } from "react-redux/"
import { useEffect } from "react";
import { getCardsFetch, setDetailLink } from "../store/cardsSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Preloader } from './Preloader'
import { getDetailFetch, getDetailSuccess } from "../store/cardsSlice";
import { useNavigate } from "react-router-dom"


export const Main = () => {

  const cards = useSelector(state => state.cards.cards)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCardsFetch())
  }, [dispatch])

  const handleDetail = (id) => {
    dispatch(getDetailSuccess())
    dispatch(setDetailLink(`http://localhost:7070/api/services/${id}`))
    dispatch(getDetailFetch())
    dispatch({type: 'DETAILS_SAGA'})
    navigate('/detail')
  }

  return (
    <>
      <h1>Услуги</h1>
      {cards.length > 0?
        cards.map(card => 
          <Card style={{ width: '18rem' }} key={card.id}>
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
              {card.price}
            </Card.Text>
            <Button variant="success" onClick={() => handleDetail(card.id)}>Детально</Button>
          </Card.Body>
        </Card>
        )
      : <Preloader />}
    </>
  )
}
