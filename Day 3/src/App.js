import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterPage from './components/Signup';
import ForgotPasswordPage from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget" element={<ForgotPasswordPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;