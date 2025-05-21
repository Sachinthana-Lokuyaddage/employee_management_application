import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeePage from './pages/EmployeePage';
import HomePage from './pages/HomePage';

const App = () => (
  <Router>
    <CssBaseline /> {/* MUI component to normalize and reset default browser styles */}
    <Navbar /> {/* Navigation bar */}
    <Container sx={{ mt: 4 }}>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for Home page */}
        <Route path="/employees" element={<EmployeePage />} /> {/* Route for Employee management page */}
      </Routes>
    </Container>
  </Router>
);

export default App;
