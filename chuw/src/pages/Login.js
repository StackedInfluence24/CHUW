import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (username === 'username' && password === 'password') {
      navigate('/profile1'); 
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Welcome to CHEW</h1>
      <p>Please log in to continue.</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <a href="createp.html">Sign Up</a></p>
    </div>
  );
};

export default Login;
