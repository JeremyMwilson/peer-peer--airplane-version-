import React from "react";
import styles from "../components/login.css";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="../pages/auth/AuthProvider">
      <button className="login-btn">Login</button>
    </Link>
  );
};

export default LoginButton;
