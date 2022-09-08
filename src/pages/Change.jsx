import React, { useEffect, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/user";
import { Link, useNavigate } from "react-router-dom";

export const Change = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleChange = (email) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email).then(() => {
      setEmail("");
      alert('Подтвердите смс на почте')
      navigate('/')
    }).catch((error)=>{
      alert('Неверный email')
      console.log(error);
    })
  };

  return (
    <div className="container login">
      <h1> Введите вашу почту</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ваша почта"
      />

      <button onClick={() => handleChange(email)}> Изменить</button>
      <Link to="/reg" className="ref">
        Создать Аккаунт
      </Link>
      <Link to="/login" className="ref">
        Сменить Аккаунт
      </Link>
    </div>
  );
};
