import { useState, useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';
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
                <Card style={{ width: '18rem', backgroundColor:"lightgrey", padding:"1rem" }} className="mb-3">
                    <center>
                    <Card.Img style={{ height: '10rem', width:"10rem" }}  variant="top" src={robot.imagen+"?raw=true"} alt={robot.imagen} />
                    </center>
                    <Card.Body>
                        <Card.Title>{robot.nombre}</Card.Title>
                        <Card.Text>
                            <b>→ Año de Fabricacion:</b> {robot.añoFabricacion}
                        </Card.Text>
                        <Card.Text>
                            <b>→ Capacidad de Procesamiento:</b> {robot.capacidadProcesamiento}
                        </Card.Text>
                        <Card.Text>
                             <b>→ Humor:</b> {robot.humor}
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
    }    

    return(
        <center>
        <Container>
        <Row>
        <Col>
            <Table className="table table-striped">
                <thead class="table-dark">
                    <th>ID</th>
                    <th><FormattedMessage id="Name"/></th>
                    <th><FormattedMessage id="Model"/></th>
                    <th><FormattedMessage id="Fabricator"/></th>
                </thead>
                <tbody>
                    
                    {robots.map(robot => 
                        <tr onClick={() => fetchDetails(robot.id)}>
                            <td><b>{robot.id}</b></td>
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
        </center>
    )

}

export default Robots;