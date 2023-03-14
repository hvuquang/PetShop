import React, { useState } from 'react';
import './LogIn.css'



function Login() {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  })

  const updateAccount = (e) => {
    let fieldName = e.target.name
    setAccount(existingValue => ({
      ...existingValue,
      [fieldName]: e.target.value
  }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${account.username} Password: ${account.password}`);
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