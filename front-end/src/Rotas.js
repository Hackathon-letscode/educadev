import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Javascript from './Pages/Javascript'
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login'

const Rotas = () => {
  return (
        <main>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/javascript" exact element={<Javascript />} />
                {/* <Route path="/login" exact element={<Login />} /> */}
            </Routes>
        </main>
  );
}

export default Rotas