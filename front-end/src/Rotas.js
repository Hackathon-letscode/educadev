import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Javascript from "./Pages/Javascript";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import PostarAula from "./Pages/PostarAula";
import "./Rotas.css";
import Matematica from "./Pages/Matematica";
import TodasAulas from "./Pages/TodasAulas";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/javascript" exact element={<Javascript />} />
      <Route path="/matematica" element={<Matematica />} />
      <Route path="/postaraula" element={<PostarAula />} />
      <Route path="/todasaulas" element={<TodasAulas />} />
    </Routes>
  );
};

export default Rotas;
