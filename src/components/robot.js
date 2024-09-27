import Card from 'react-bootstrap/Card';

function Robot(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.robot.imagen} alt={props.robot.imagen} />
           <Card.Body>
               <Card.Title>{props.robot.nombre}</Card.Title>
               <Card.Text>
                   {props.robot.descripcion}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Robot;