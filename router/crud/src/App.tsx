import { Cards } from "./components/Cards"
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Create } from "./components/Create";
import { ViewCard } from "./components/ViewCard";
import { Edit } from "./components/Edit";
import { Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App() {

  return (
    <>
      <Row>
        <Col>
          <div id="img">
              <Image src="./main.jpg/" id="img"></Image>    
          </div>
        </Col>
        <Col className="name">
          Неопознанный Дракон
        </Col>
      </Row> 
      
      <Row className="RowCards">
        <Col>
          <Routes>
                  <Route path="/posts/edit/:id" element={<Edit />} />
                  <Route path="/posts/:id" element={<ViewCard />} />
                  <Route path="/" element={<Cards />} />
                  <Route path="/posts/new" element={<Create />} />
          </Routes>
        </Col>
      </Row>
    </>
  )
}

export default App
