import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/project/Community';
import Universe from './pages/Universe';
import ProjectHome from './pages/project/Project';
import GlobalNavigation from './components/GlobalNavigation';

function App() {
  return (
    <Router>
      <GlobalNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/project" element={<ProjectHome />} />
      </Routes>
    </Router>
  );
}

export default App;