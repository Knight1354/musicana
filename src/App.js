import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import {  BrowserRouter as Router,  Routes,  Route,useParams } from 'react-router-dom';
import axios from 'axios'
import HomePage from './Components/MainCompnents/HomePage' 
import Player from './Components/MainCompnents/Player';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/player/:username" element={<ProfileComponentWrapper/>}/>
      </Routes>
    </Router>
    </QueryClientProvider>
  );
}
const ProfileComponentWrapper = () => {
  const { username } = useParams();
  return <Player username={username} />;
};
export default App;
