import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { resetUser, setUser } from "../store/slice/user";
import { useNavigate } from "react-router-dom";

export const Changepas = () => {
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleReset = (password) => {
    const auth = getAuth();

    const queryParams = new URLSearchParams('?mode=resetPassword&oobCode=oBkIOGLtD1dEYiMw7r_fza32BQM9-eWf79KJe3apztMAAAGDHLOVjw&apiKey=AIzaSyATgjlQeTvr4GuH4qIn_LgtiDno9NCck84&lang=ru')
    const oobCode = queryParams.get('oobCode')
    confirmPasswordReset(auth,oobCode, password)
      .then(() => {
        alert("Успешно");
      })
      .catch((error) => {
        setPass("")
        console.log(error);
      });
  };
  return (
    <div className="container login">
      <h1> Изменить пороль</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Текущий пароль"
      />
      <button onClick={() => handleReset(password)}>Изменить</button>
    </div>
  );
};
