import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='Space'></div>
        <div className="App">
          <h1>Hello World</h1>
          <br /> <br />
        </div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Register" element={<Register />} /> 
        </Routes>
       
            
        
      </Router>
    </>
  );
}

export default App;
