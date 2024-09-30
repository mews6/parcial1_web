import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import {FormattedMessage} from 'react-intl';
const { useEffect, useState } = require("react");

function Robot(props){

    const [robots, setRobots] = useState([]);
    const params = useParams();

    useEffect(()=>{
        const URL = "http://localhost:3001/robots";
        fetch(URL).then(data => data.json()).then(data => {
            setRobots(data);
        })
    }, []);

    const robot = {...robots[params.robotId-1]}
    console.log(robot)

    return(
        <Card style={{ width: '18rem', backgroundColor:"lightgrey", padding:"1rem" }} className="mb-3">
            <center>
            <Card.Img style={{ height: '10rem', width:"10rem" }}  variant="top" src={robot.imagen+"?raw=true"} alt={robot.imagen} />
            </center>
            <Card.Body>
                <Card.Title>{robot.nombre}</Card.Title>
                <Card.Text>
                    <></>
                    <b>→ <FormattedMessage id="FDate"/></b> {robot.añoFabricacion}
                </Card.Text>
                <Card.Text>
                    <b>→ <FormattedMessage id="Processing"/></b> {robot.capacidadProcesamiento}
                </Card.Text>
                <Card.Text>
                     <b>→ <FormattedMessage id="Humor"/></b> {robot.humor}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Robot;