import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux/";
import { getCardsFetch } from "../store/cardsSlice";

export const Error = () => {

  const dispatch = useDispatch();

  const handleReload = () => {
    dispatch(getCardsFetch())
  }

  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>Произошла ошибка</Card.Text>
                    <Button variant="primary" onClick={() => handleReload()}>повторить</Button>
            </Card.Body>
        </Card>
    </>
  )
}
