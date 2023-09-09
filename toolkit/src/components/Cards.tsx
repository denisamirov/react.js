import Card from 'react-bootstrap/Card'
import type { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import { CardsViewAdd} from '../store/cardsSlice'
import { useDispatch } from 'react-redux'
import { filmsArray } from '../store/cardsSlice'


export const Cards = () => {
    const data = useSelector((state: RootState) => state.cards.films)
    const dispatch = useDispatch()

    const handleCardView = (card:filmsArray) => {
      dispatch(CardsViewAdd(card))
    }

      return (
        <>
            {data && data.map((card:filmsArray, index:number) => 
                    <Card style={{ width: '18rem' }} 
                          className='customCard' 
                          key={index} 
                          onClick={() => handleCardView(card)}>
                    <Card.Img variant="top" src={card.Poster}/>
                    <Card.Body>
                        <Card.Title>{card.Title}</Card.Title>
                    </Card.Body>
                </Card>)}
        </>
  )
}
