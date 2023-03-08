import React, { useState } from 'react';
import './LogIn.css'



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
    // Handle login logic here
  };

  return (
    <div id='login-section'>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username"/>
        <br />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        <br />
        <button type="submit">GO</button>
      </form>
    </div>
  );
}

export default Login;