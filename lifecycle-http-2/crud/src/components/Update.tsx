import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { CardsView } from './CardsView';
import {BsArrowClockwise} from 'react-icons/bs';
import { Forma } from './Forma';

export const Update = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const handleUpdate = async() => {
        await fetch("http://localhost:7070/notes")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }

    useEffect(() => {
        handleUpdate()
    }, [])

    const handleDelete= async (index:number, id:number) => {
        const updatedData = [...items];
        updatedData.splice(index, 1);
        setItems(updatedData);

        const deleteMethod = {
            method: 'DELETE', 
        }

        await fetch(`http://localhost:7070/notes/${id}`, deleteMethod)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    };

    const AddCard = async (newCard) => {
      const postMethod = {
          method: 'POST',
          body: JSON.stringify(newCard) 
      }
        
    
        await fetch(`http://localhost:7070/notes/`, postMethod)
          .then(
            (result) => {
              setIsLoaded(true);
              const updatedData = [...items, newCard];
              setItems(updatedData);
            },
            (error) => {
                setIsLoaded(true);
                console.log(error);
                setError(error);
            }
          )
    
    handleUpdate()
    
    }

  return (
    <div>
      <Container>
        <Row>
            <Col className='notes'><h3>Notes</h3></Col>
            <Col className='notesUpdate'>
                <Button variant="primary" onClick={handleUpdate}>
                    <BsArrowClockwise />
                </Button>
            </Col>
        </Row>
        <Row>
            <CardsView items={items} onDelete={handleDelete}/>
        </Row>
        <Row>
            <Forma onUp={AddCard}/>
        </Row>
      </Container>
    </div>
  )
}
