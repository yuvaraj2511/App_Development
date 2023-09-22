import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Redux/UserSlice';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return false;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email address.');
      return false;
    }

    // Password validation (you can add more rules as needed)
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
      dispatch(login(email));
      setShowSuccess(true); // Show success popup
      setTimeout(() => {
        setShowSuccess(false); // Hide success popup after 2 seconds
        navigate('/admin');
      }, 2000);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-login" onClick={handleLogin}>
          Login
        </button>
        <p className="forgot-password" onClick={() => navigate('/register')}>
          Sign up
        </p>
        <p className="forgot-password" onClick={() => navigate('/forget')}>
          Forgot Password?
        </p>
      </div>

      {showError && (
        <div className="error-popup">
          <p className="error-message">{errorMessage}</p>
          <button onClick={() => setShowError(false)}>Close</button>
        </div>
      )}

      {showSuccess && (
        <div className="success-popup">
          <p className="success-message">Login successful!</p>
          <button onClick={() => setShowSuccess(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
