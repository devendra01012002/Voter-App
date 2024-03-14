import React, { useState } from 'react';
import "./SignUp.css"
const SignUp = () => {
  const [name, setName] = useState('');
  const [adharNumber, setAdharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <div>
      <h2>Register</h2>
      <form className="form">
        <label className="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="adharNumber">Adhar Number:</label>
        <input
          type="text"
          id="adharNumber"
          value={adharNumber}
          onChange={(e) => setAdharNumber(e.target.value)}
        />

        <label className="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;