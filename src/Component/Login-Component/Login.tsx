import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import UsernameIcon from "./username_icon.png";
import lock from "./password.png";

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/mainpage");
  };

  return (
    <div className="login-container">
      <div className="login">
        <form onSubmit={handleSubmit} className="form">
          <div className="head">
            <h3 className="login-text">Login</h3>
          </div>

          <div className="input-container">
            <input type="text" placeholder="Username" className="input" />
            <img src={UsernameIcon} className="usericon" alt="Username" />
          </div>

          <div className="input-container">
            <input type="password" placeholder="Password" className="input" />
            <img src={lock} className="lock" alt="Password" />
          </div>

          <div className="me">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
