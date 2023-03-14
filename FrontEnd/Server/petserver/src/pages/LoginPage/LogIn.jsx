import React, { useState } from 'react';
import './LogIn.css'
import axios from "axios"


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [account , setAccount] = useState();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/v1/account/login', {
      "tentaikhoan": username,
      "matkhau": password
    }).then(res=>setAccount(res.data))
    console.log(account)
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