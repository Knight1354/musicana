import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import {  BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';
import axios from 'axios'
import HomePage from './Components/MainCompnents/HomePage' 
import Player from './Components/MainCompnents/Player';
import './App.css';
  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/player" element={<Player/>}/>
      </Routes>
    </Router>
  );
}

export default App;
