import {Card, Button} from 'react-bootstrap';
import {BsX} from 'react-icons/bs';
import { CardsV } from '../module/module';
import { Items } from '../module/module';

export const CardsView:React.FC<CardsV> = ({items, onDelete}) => {
  return (
    <div className='cards'>{items.map((i:Items, index:number) => 
    <div key={index}>
        <Card className='card'>
            <Card.Text>
                {i.content}
            </Card.Text>
            <Button className='delete-button' variant='danger'>
                <BsX onClick={() => onDelete(index, i.id)}/>
            </Button>
        </Card>
    </div>)}</div>
  )
}
