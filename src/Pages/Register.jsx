
import React from 'react';
import '../Styles/Styles2.css';
import './Login.jsx'

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <input type="text" id="username" name="username" placeholder="Username" required/>
      </div>
      <div>
        <input type="password" id="password" name="password" placeholder="Password" required/>
      </div>
      <div>
        <input type="email" id="email" name="email" placeholder="Enter college mail only" required/>
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
