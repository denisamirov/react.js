import Card from 'react-bootstrap/Card';
import {useEffect, useState} from 'react';

export const Watch = ({name, zone, index, onDelete}) => {
    const timeZoneOffset = zone * 60 * 60 * 1000
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const TimeID = setInterval(() => {
            setTime(new Date())
        }, 1000)
    
        return () => {
            clearInterval(TimeID)
        }
    })

    const newTime = new Date(time.getTime() + timeZoneOffset)

  return (
    <div>
        <Card style={{ width: '18rem' }} className='card'>
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    {newTime.toLocaleTimeString()}
                </Card.Text>
                <button onClick={() => onDelete(index)}>Delete</button>
            </Card.Body>
        </Card>
    </div>
  )
}
