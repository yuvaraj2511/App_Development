import React, { useState } from 'react';
import '../assests/CSS/login.css'; // Import your CSS file

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add your forgot password logic here
    console.log('Forgot Password clicked');
  };

  return (
    <div className="forgot-password-form-container">
      <h2 className="login-form-header">Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          className="login-form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="login-form-button" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
