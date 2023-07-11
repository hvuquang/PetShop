import React, { useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const updateAccount = (e) => {
    let fieldName = e.target.name;
    setAccount((existingValue) => ({
      ...existingValue,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    axios
      .post("http://localhost:8000/v1/account/login", {
        username: account.username,
        password: account.password,
      })
      .then(
        (res) => {
          window.location.href = "http://localhost:3000/petpage";
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div id="background">
      <div id="login-section">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={account.username}
            onChange={updateAccount}
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            name="password"
            value={account.password}
            onChange={updateAccount}
            placeholder="Password"
          />
          <br />
          {/* <button type="submit"><Link to="/petpage">GO</Link></button> */}
          <Link to={"/registerAccount"}>Don't have an account? Register here!</Link>
          <button onClick={handleSubmit}>GO</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
