import React,{useState} from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <h1>Login</h1>
        <div>
          <input type="text" id="username" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <div className="create-account">
          <a href='Subjects' className="btn-continue">Login</a>
        </div>

        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <div className="create-account">
          <a href='Register' className="btn-continue">Create an account</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
