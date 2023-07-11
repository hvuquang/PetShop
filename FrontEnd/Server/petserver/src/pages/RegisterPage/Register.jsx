import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    fullname: "",
    phone_number: "",
    email: "",
    address: "",
  });

  const updateAccount = (e) => {
    let fieldName = e.target.name;
    setAccount((existingValue) => ({
      ...existingValue,
      [fieldName]: e.target.value,
    }));
  };

  const updateAccount1 = (e) => {
    let name = e.target.name;
    setAccount(() => ({}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    axios
      .post("http://localhost:8000/v1/account/register", {
        fullname: "",
        email: "",
        phone_number: "",
        address: "",
        admin: true,
        username: account.username,
        password: account.password,
      })
      .then(
        (res) => {
          window.location.href = "http://localhost:3000/";
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
        <h1>REGISTER</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="fullname"
            type="text"
            placeholder="Full Name"
            onChange={updateAccount}
            value={account.fullname}
          />
          <br />
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={updateAccount}
            value={account.email}
          />
          <br />
          <input
            name="phone-number"
            type="text"
            placeholder="Phone Number"
            onChange={updateAccount}
            value={account.phone_number}
          />
          <br />
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={updateAccount}
            value={account.address}
          />
          <br />
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
          <Link to={"/"}>Already had an account? Login here!</Link>
          <button onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
