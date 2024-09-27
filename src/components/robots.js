import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FormattedMessage} from 'react-intl';

function Robots(){
    
    const [robots, setRobots] = useState([]);

    useEffect(()=>{
        const URL = "http://localhost:3001/robots";
        fetch(URL).then(data => data.json()).then(data => {
            setRobots(data);
        })
    }, []);

    console.log(robots);
    return(
        <div>
            <table className="table">
                <thead>
                <th scope="row">{robots.id}</th>
                <th>{robots.nombre}</th>
                <th>{robots.modelo}</th>
                <th>{robots.empresaFabricante}<th/>
                </thead>
                <tbody>
                <Row>
                {mascotas.map(mascota => <Col><Mascota mascota={mascota} key={mascota.id}/></Col>)}               
                </Row>
                </tbody>
            </table>
        </div>
    )
}

export default Robots;