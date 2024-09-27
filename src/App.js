import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Robots from './components/robots';

const { useEffect, useState } = require("react");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes> 
         <Route path="/login" element ={<Login />} /> 
         <Route path="/" element = {<Login />} />
         <Route path="/robots" element={<Robots />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
