import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import EditBook from './pages/EditBook'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Shirley's Library</h1>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/edit" element={<EditBook />} />
      </Routes>
    </Router>
  )
}
