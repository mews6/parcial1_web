import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

function Robots(){
    
    const [robots, setRobots] = useState([]);

    useEffect(()=>{
        const URL = "http://localhost:3001/robots";
        fetch(URL).then(data => data.json()).then(data => {
            setRobots(data);
        })
    }, []);
    
    const robotData = {...robots}
    console.log(robotData);

    return(
        <Table>
            <thead>
                <th>id</th>
                <th>Nombre</th>
                <th>modelo</th>
                <th>Empresa Fabricante</th>
            </thead>
            <tbody>
                
                {robots.map(robot => 
                    <tr>
                        <td>{robot.id}</td>
                        <td>{robot.nombre}</td>
                        <td>{robot.modelo}</td>
                        <td>{robot.empresaFabricante}</td>
                    </tr>
                )}
                
            </tbody>
        </Table>
    )

}

export default Robots;