import React, { useState } from 'react';
import axios from '../utils/auth1';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
