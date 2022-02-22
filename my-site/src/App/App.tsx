import AboutMePage from '../AboutMe/AboutMePage';
import ProjectsPage from '../Projects/ProjectsPage'
import NavBar from '../Components/NavBar/NavBar';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import logo from '../logo.svg';
import './App.css';
import ResumePage from '../Resume/ResumePage';
import ContactMePage from '../ContactMe/ContactMePage';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<AboutMePage />} />
        <Route path='/Projects' element={<ProjectsPage/>} />
        <Route path='/Resume' element={<ResumePage/>}/>
        <Route path='/ContactMe' element={<ContactMePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
