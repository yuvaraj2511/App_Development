import React, { useState } from 'react';
import '../assests/CSS/login.css'; // Import your CSS file

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup clicked');
  };

  return (
    <div className="signup-form-container">
      <h2 className="login-form-header">Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          className="login-form-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-form-button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
