import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login';
import RegisterPage from './components/register';
import ForgotPasswordPage from './components/forgot';
import Product from './components/product';
import AdminPannel from './components/AdminPannel';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget" element={<ForgotPasswordPage />} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/admin' element={<AdminPannel/>}/>
      </Routes>
    </Router>
  );
}

export default App;