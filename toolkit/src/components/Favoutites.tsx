import Card from 'react-bootstrap/Card'
import type { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import { CardsViewAdd, filmsArray } from '../store/cardsSlice'
import { useDispatch } from 'react-redux'
import { Col, Row } from 'react-bootstrap'


export const Favoutites = () => {

  const data = useSelector((state: RootState) => state.cards.favouriteCards)
  const dispatch = useDispatch()

  const handleCardView = (card:filmsArray) => {
    dispatch(CardsViewAdd(card))
  }

  return (
    <>
      <div>
        <Row>
          <Col xs={12} className='cards'>
            {data && data.map((card, index:number) => 
                  <Card style={{ width: '18rem' }} 
                        className='customCard' 
                        key={index} 
                        onClick={() => handleCardView(card)}>
                  <Card.Img variant="top" src={card.Poster}/>
                  <Card.Body>
                      <Card.Title>{card.Title}</Card.Title>
                  </Card.Body>
              </Card>)}
          </Col>
        </Row>
      </div>
    </>
  )
}
