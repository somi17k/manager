import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'farmer' && password === 'admin123') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password!');
    }
  };

  return (
    <div className="login-container">
      <h2>Farm Management Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default Login;
