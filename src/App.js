import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Robots from './components/robots';
import Robot from './components/robot';

const { useEffect, useState } = require("react");

function App() {
  return (
    <div className="App">
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <BrowserRouter>
       <Routes> 
         <Route path="/login" element ={<Login />} /> 
         <Route path="/" element = {<Login />} />
         <Route path="/robots" element={<Robots />} />
         <Route path="/robots/:robotId" element={<Robot />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
