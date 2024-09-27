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
    
    const robotData = {...robots}
    console.log(robotData);
}

export default Robots;