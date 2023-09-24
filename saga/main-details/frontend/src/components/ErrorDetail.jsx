import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux/";
import { getDetailFetch } from "../store/cardsSlice";

export const ErrorDetail = () => {

  const dispatch = useDispatch();

  const handleReload = () => {
    dispatch(getDetailFetch())
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
