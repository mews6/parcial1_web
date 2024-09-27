import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
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
       <Card style={{ width: '18rem' }} className="mb-3">
           <Card.Img style={{ height: '14rem' }}  variant="top" src={robot.imagen} />
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

export default Robot;