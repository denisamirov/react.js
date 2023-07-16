import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Watches } from './Watches';

export const Add = () => {
    const [stateName, setName] = useState('London');
    const [stateZone, setZone] = useState('2');
    const [watchData, setWatchData] = useState([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const row = {stateName, stateZone}
        setWatchData([...watchData, row]);
    }

    const handleChangeName = (e: React.FormEvent<HTMLFormElement>) => {
        setName(e.target.value)
    }

    const handleChangeZone = (e: React.FormEvent<HTMLFormElement>) => {
        setZone(e.target.value)
    }

    const handleDeleteWatch = (index) => {
        const updatedData = [...watchData];
        updatedData.splice(index, 1);
        console.log(index)
        setWatchData(updatedData);
    };

  return (
    <div>
        <style type="text/css">
            {`
                .btn-flat {
                margin: 0.5%;
                background-color: black;
                color: white;
                }
            `}
        </style>
        
        <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md={4} controlId="validationCustom01">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Название"
                        defaultValue="London"
                        onChange={handleChangeName}
                    />
                </Form.Group>
                <Form.Group as={Col} md={4} controlId="validationCustom02">
                    <Form.Label>Временная зона</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Временная зона"
                        defaultValue="2"
                        onChange={handleChangeZone}
                    />
                </Form.Group>
                <Form.Group as={Col} md={4} controlId="validationCustom02" className='down'>
                    <Button type="submit" variant='flat'>Добавить</Button>
                </Form.Group>
            </Row>
      </Form>
      <Watches props={watchData} onDeleteWatch={handleDeleteWatch}></Watches>
    </div>
  )
}
