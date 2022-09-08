import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export const Home = () => {
  const { email, isAuth } = useAuth();
  return isAuth ? (
    <div className="container">
      <h1 className="welcome"> Добро Пожаловать {email} </h1>
      <Link to="/login" className="ref">Сменить Аккаунт</Link>
      <br />
      <Link to="/change" className="ref">Сбросить пороль</Link>
    </div>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
