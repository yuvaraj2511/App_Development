import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assests/CSS/login.css'; 

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const sendResetEmail = () => {
    console.log('Sending to:', email);

   
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Forgot Password</h2>
        <p>Enter your email address to receive a password reset link.</p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn-login" onClick={sendResetEmail}>
          Send Reset Email
        </button>
        <p className="back-to-login" onClick={() => navigate('/login')}>
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
