import React, { useState } from 'react';
import '../assests/CSS/login.css'; 

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login clicked');
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-header">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="login-form-input"
          type="text"
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <input
          className="login-form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
