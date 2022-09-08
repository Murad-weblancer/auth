import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slice/user";

export const Log = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
        // alert('Удачно вошли')
      })
      .catch((error) => {
        alert("Введидте данные коректно");
      });
  };

  return (
    <div className="login">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="электроная почта"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="пароль"
      />
      <button onClick={() => handleLogin(email, pass)}> Войти </button>
    </div>
  );
};
