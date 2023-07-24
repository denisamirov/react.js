import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Loading } from './Loading';
import { Id, currentUser } from '../models/models';

export const Details = ({id}:Id) => {
    const [currentUser, setCurrentUser] = useState<currentUser>([])
    const [image, setKeyImage] = useState(0)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const cardLoad = async(id:Id) => {
            try {
                const res = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
                const user = await res.json()
                setCurrentUser(user)
                console.log(user)
                setKeyImage(i => i + 1)
            }
            catch (e) {
                console.error(e)
            }
            finally {
                setLoading(false)
            }
        }
        cardLoad(id)
    }, [id])

  return currentUser.details ? (
    <>
        <Card>
            <Card.Img variant="top" src={currentUser.avatar} key={image}/>
            {isLoading && <Loading />}
            <Card.Body>
                <Card.Title>
                    {currentUser.name}
                </Card.Title>
                <Card.Text>City: {currentUser.details.city}</Card.Text>
                <Card.Text>Company: {currentUser.details.company}</Card.Text>
                <Card.Text>Position: {currentUser.details.position}</Card.Text>
            </Card.Body>
        </Card>
    </>
  ) : null
}
