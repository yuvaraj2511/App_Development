import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../asserts/css/login.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const login = () => {
    
   
    console.log('Username:', username);
    console.log('Password:', password);

    
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-login" onClick={login}>
          Login
        </button>
        <p className="forgot-password">Forgot Password?</p>
      </div>
    </div>
  );
};

export default LoginPage;
