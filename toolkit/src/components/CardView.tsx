import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { CardsViewAdd, FavouriteAdd, favouriteDelete} from '../store/cardsSlice'
import type { RootState } from '../store/store'
import { useEffect } from 'react' 
import { Col, Row } from 'react-bootstrap';
import { filmsArray } from '../store/cardsSlice'

export const CardView = () => {

    const favouriteState = useSelector((state: RootState) => state.cards.favourite)
    const favouriteCards= useSelector((state: RootState) => state.cards.favouriteCards)
    const cardView = useSelector((state: RootState) => state.cards.cardView)
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const handleClose = () => {
        setShow(false)
        dispatch(CardsViewAdd({}))
    };

    
    const handleAddFavourite = (card:filmsArray) => {
        if (favouriteCards.indexOf(card) === -1) {
            dispatch(FavouriteAdd(card))   
        }
              
    };


    const handleDeleteFavourite = (imdbID:number | undefined) => {
        imdbID  ? dispatch(favouriteDelete(imdbID))
                : imdbID
    }



    useEffect(() => {
        cardView.Title ? setShow(true) : cardView
    }, [cardView])

  return (
    <>

        <Modal show={show} onHide={handleClose} 
            animation={false} 
            aria-labelledby="contained-modal-title-vcenter" 
            size="lg"
            centered>

            <Modal.Header closeButton>
                <Modal.Title>{cardView.Title}</Modal.Title>
            </Modal.Header>
            <Row>
                <Col>
                    <img src={cardView.Poster} alt="" className='poster'/>
                </Col>
                <Col>
                    <Modal.Body>
                    
                        <h5>Actors:</h5><h6>{cardView.Actors}</h6>
                        <h5>Genre:</h5><h6>{cardView.Genre}</h6>
                        <h5>Released:</h5><h6>{cardView.Released}</h6>
                        <h5>Runtime:</h5><h6>{cardView.Runtime}</h6>
                        <h5>Director:</h5><h6>{cardView.Director}</h6>
                        <h5>Rating:</h5><h6>{cardView.imdbRating}</h6>
                    </Modal.Body>
                </Col>
            </Row>
            <Modal.Footer>
                {favouriteState ? 
                    <Button variant="danger" onClick={() => handleDeleteFavourite(cardView.imdbID)}>
                        Delete
                    </Button> :
                    <Button variant="success" onClick={() => handleAddFavourite(cardView)}>
                        Favourite
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    
    </>
  )
}
