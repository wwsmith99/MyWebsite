import AboutMePage from '../AboutMe/AboutMePage';
import NavBar from '../Components/NavBar/NavBar';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import logo from '../logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<AboutMePage />} />
      </Routes>
    </div>
  );
}

export default App;
