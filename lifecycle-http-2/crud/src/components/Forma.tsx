import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import { PropsAdd } from '../module/module';


export const Forma:React.FC<PropsAdd> = ({ onUp }) => {
  const [state, setState] = useState({})

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onUp(state)
    }

  const handleChange = (e:React.FormEvent<HTMLFormElement>) => {
    setState({'content': e.target.value})
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Note</Form.Label>
        <Form.Control placeholder="Enter New Note" onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
