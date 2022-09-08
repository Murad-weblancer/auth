import React from "react";

import { Routes, Route,Navigate } from "react-router-dom";
import { Change } from "./pages/Change";
import { Changepas } from "./pages/Changepas";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registr } from "./pages/Registr";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reg" element={<Registr/>} />
          <Route path="/change" element={<Change/>} />
          <Route path="/changepass" element={<Changepas/>} />
        </Routes>
    </div>
  );
}

export default App;
