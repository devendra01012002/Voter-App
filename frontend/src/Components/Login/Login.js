import React, { useState } from 'react';
import "./Login.css"
function Login() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleAadharNumberChange = (event) => {
    setAadharNumber(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    
    <div className="login">
      <div>
      <h2>Login</h2>
      <p>Enter your details to login</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="aadharNumber"
          placeholder="Aadhar Number"
          value={aadharNumber}
          onChange={handleAadharNumberChange}
        />
        <input
          type="text"
          className="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          type="password"
          className="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;