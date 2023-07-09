import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import {CardProps} from '../module/module'


export const Cards = ({children, props}: CardProps) => {
  return (
    <>
        <Card style={{ width: '18rem', margin: '10px 10px'}}>
            <Card.Img variant="top" style={{width:"100%", height:"100px", background:"grey", display: props.invisible}} src={props.src}/>
            <Card.Body style={{ textAlign: 'initial' }}>
                {children}
            </ Card.Body>
        </Card>
    </>
  )
}
