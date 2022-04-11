import './App.css';
import React from 'react'
import Companies from './components/Companies';
import Patient from './components/Patient';
import Home from './components/Home';
import Insurance from './components/Insurance';
import Medical from './components/Medical';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Companies">Companies</Link>
        <Link to="/Patient">Patient</Link>
        <Link to="/Insurance">Insurance</Link>
        <Link to="/Medical">Medical</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Companies" element={<Companies/>}/>
        <Route path="/Patient" element={<Patient/>}/>
        <Route path="/Insurance" element={<Insurance/>}/>
        <Route path="/Medical" element={<Medical/>}/>
      </Routes>
    </Router>
  );
}

export default App;
