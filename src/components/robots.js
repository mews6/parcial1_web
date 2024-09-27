import { useState, useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Robot from './robot';
import Card from 'react-bootstrap/Card';

function Robots(){
    
    const [robots, setRobots] = useState([]);
    let [robot, setRobot] = useState(null);

    useEffect(()=>{
        const URL = "http://localhost:3001/robots";
        fetch(URL).then(data => data.json()).then(data => {
            setRobots(data);
        })
    }, []);
    

    function fetchDetails(id) {
        setRobot(robots[id-1])
        console.log(robot)
    }

    function renderDetail() {
        if (robot === null) {
            return null;
        } return(
                <Card style={{ width: '18rem' }} className="mb-3">
                    <Card.Img style={{ height: '14rem' }}  variant="top" src={robot.imagen} alt={robot.imagen} />
                    <Card.Body>
                        <Card.Title>{robot.nombre}</Card.Title>
                        <Card.Text>
                            <b>-> Año de Fabricacion:</b> {robot.añoFabricacion}
                        </Card.Text>
                        <Card.Text>
                            <b>-> Capacidad de Procesamiento:</b> {robot.capacidadProcesamiento}
                        </Card.Text>
                        <Card.Text>
                             <b>-> Humor:</b> {robot.humor}
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
    }    

    return(
        <Container>
        <Row>
        <Col>
            <Table>
                <thead>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>modelo</th>
                    <th>Empresa Fabricante</th>
                </thead>
                <tbody>
                    
                    {robots.map(robot => 
                        <tr onClick={() => fetchDetails(robot.id)}>
                            <td>{robot.id}</td>
                            <td>{robot.nombre}</td>
                            <td>{robot.modelo}</td>
                            <td>{robot.empresaFabricante}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Col>
        <Col>
            <div>
                {renderDetail()}
            </div>    
        </Col>
        </Row>
        </Container>
    )

}

export default Robots;