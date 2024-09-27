import { useState, useEffect } from 'react';
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
    const header = ["id", "Nombre", "Modelo", "Empresa Fabricante"];

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                    {Object.keys(robots.available).map((k,i) =>{
                        let data = robots.available[k];
                        return (
                          <tr key={i}>
                            <td>{k}</td>
                            <td>{data.nombre}</td>
                            <td>{data.modelo}</td>
                            <td>{data.empresaFabricante}</td>
                            </tr> );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Robots;