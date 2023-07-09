import './App.css'
import {Cards} from '../components/cards' 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function App() {
  const src = './app.component'
  
  return (
    <div className="main">
      <Cards props={{invisible: '', src}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Cards>

      <Cards props={{invisible: 'none', src}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Cards>

      <Cards props={{invisible: '', src}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Cards>

      <Cards props={{invisible: 'none', src}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Cards>


    </div>
  )
}

export default App
