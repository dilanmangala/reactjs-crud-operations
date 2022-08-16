
import React, { Component } from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import AddUser from './components/adduser';
import EditUser from './components/edituser';
import Login from './components/Login';
import AddMember from './components/addmember'
import Register from './components/register';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div style={{maxWidth:'30rem', margine:'4rem auto'}}>
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Home/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="edit:id" element={<EditUser/>}/>
          <Route path="/add-member" element={<AddMember/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
