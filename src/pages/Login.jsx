import React from "react";
import { Link } from "react-router-dom";
import { Log } from "../components/Log";

export const Login = () => {
  return (
    <div className="container">
      <h1> Войти </h1>
      <Log />
      <Link to="/reg" className="ref">Регистрация </Link>
    </div>
  );
};
