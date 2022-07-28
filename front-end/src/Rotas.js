import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';

const Rotas = () => {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* <Route path="/login" exact element={<Login />} /> */}
        {/* <Route path="/login" exact element={<Login />} /> */}
      </Routes>
    </main>
  );
};

export default Rotas;
