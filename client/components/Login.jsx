import React, { useState } from "react";
import ReactDOM from "react-dom";

// import "../styles/login.css";

const Login = () => {

  render(
    <div>
      <h1>Welcome to Trail Feathers</h1>
      <form action="/auth/google" method="GET">
        <button type="submit">Sign In With Google</button>
      </form>
    </div>
  )
}

export default Login
