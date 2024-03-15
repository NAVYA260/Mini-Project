
import React from 'react';
import Styles2 from '../Styles/Styles2.css';
import Login from './Login.jsx'

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <input type="text" id="username" name="username" placeholder="Username" />
      </div>
      <div>
        <input type="password" id="password" name="password" placeholder="Password" />
      </div>
      <div>
        <input type="email" id="email" name="email" placeholder="Enter college mail only" />
      </div>
      <div className="login-link">
        <p>Already have an account? <a href="Login">Login</a></p>
      </div>
      <div className="create-account">
        <a href="Login" className="btn-continue">Register</a>
      </div>
    </div>
  );
}

export default Register;
