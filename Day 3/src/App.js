import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login';
import RegisterPage from './components/register';
import ForgotPasswordPage from './components/forgot';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget" element={<ForgotPasswordPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;