// src/App.js
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Signup from './pages/Signup';
import CreateProfile from './pages/CreateProfile';
import Profile from './pages/Profile';
import BlankSlate from './pages/Blankslate';
import './App.css'; 
import Login from './pages/Login';

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blank-slate" element={<BlankSlate />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

   </>
  );
}

export default App;
