import { useEffect, useState } from 'react'
import { Details } from './Details'
import { Row, Col, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import { info } from '../models/models';

export const List = () => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState<string>('');

    const handleClick = async(id:string) => {
        setCurrentUser(id)
    }

    useEffect(() => {
        const dataFetch = async() => {
            try {
                const res = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
                const users = await res.json()
                setUsers(users)
            }
            catch (e) {
                console.error(e)
            }
        }
        dataFetch()
    }, [])
  return (
    <>
        <Container>
            <Row>
                <Col> 
                    <ListGroup>
                        {users.map((i:info, index) => <ListGroupItem key={index} onClick={() => handleClick(i.id)}>{i.name}</ListGroupItem>)} 
                    </ListGroup>
                </Col>
                <Col>
                    <Details id={currentUser}></Details>
                </Col>
            </Row>
        </Container>
    </>
  )
}
