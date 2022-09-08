import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Form } from "./Form";
import { setUser } from "../store/slice/user";
import { useNavigate } from "react-router-dom";

export const Reg = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const handlRegister = (email, password, confirm) => {
    const auth = getAuth();
    if (pass.length < 6 || pass.length === 10) {
      alert("введите значение от 6 до 10");
    } else if (!pass.includes(pass.toUpperCase())) {
      alert("буквы должна быть за главной");
    } else if (pass !== confirm) {
      alert("Не правильный пороль");
    } 
    else {
      createUserWithEmailAndPassword(auth, email, password, confirm).then(
        ({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
          navigate("/");
          alert('Успешно зарегестрировались')
        }
      ).catch(()=>{
        alert('Неверный email')
      })
    }
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
      <input
        type="password"
        value={confirmPass}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="подтвердить пароль"
      />
      <button onClick={() => handlRegister(email, pass, confirmPass)}>
        {" "}
        Создать{" "}
      </button>
    </div>
  );
};
