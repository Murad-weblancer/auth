import React from "react";
import { Link } from "react-router-dom";
import { Reg } from "../components/Reg";

export const Registr = () => {
  return (
    <div className="container">
      <h1> Регистрация </h1>
      <Reg/>
        <Link to="/login" className="ref">Войти </Link>
    </div>
  );
};
