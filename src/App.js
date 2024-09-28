import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Robots from './components/robots';
import Robot from './components/robot';
import HeaderImg from './header/header-img.png';

function App() {
  return (
    <div className="App">
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <img src={HeaderImg} alt='header' />
      <BrowserRouter>
       <Routes> 
         <Route path="/login" element ={<Login />} /> 
         <Route path="/" element = {<Login />} />
         <Route path="/robots" element={<Robots />} />
         <Route path="/robots/:robotId" element={<Robot />} />
       </Routes>
     </BrowserRouter>
    <center>
      <p>
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </p>  
    </center>
     </div>
  );
}

export default App;
