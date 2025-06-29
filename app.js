import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './admin.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<div><h1>Welcome to Shirley's Library</h1></div>} />
      </Routes>
    </Router>
  );
}
