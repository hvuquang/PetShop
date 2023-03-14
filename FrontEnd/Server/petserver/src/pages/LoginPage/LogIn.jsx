import React, { useState } from 'react';
import './LogIn.css'
import axios from "axios"


function Login() {
<<<<<<< HEAD
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [account , setAccount] = useState();
=======
  const [account, setAccount] = useState({
    username: '',
    password: '',
  })
>>>>>>> HuyV1

  const updateAccount = (e) => {
    let fieldName = e.target.name
    setAccount(existingValue => ({
      ...existingValue,
      [fieldName]: e.target.value
  }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    axios.post('http://localhost:8000/v1/account/login', {
      "tentaikhoan": username,
      "matkhau": password
    }).then(res=>setAccount(res.data))
    console.log(account)
=======
    console.log(`Username: ${account.username} Password: ${account.password}`);
>>>>>>> HuyV1
    // Handle login logic here
  };

  return (
    <div id='login-section'>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" name='username' value={account.username} onChange={updateAccount} placeholder="Username"/>
        <br />
          <input type="password" name='password' value={account.password} onChange={updateAccount} placeholder="Password" />
        <br />
        <button type="submit">GO</button>
      </form>
    </div>
  );
}

export default Login;