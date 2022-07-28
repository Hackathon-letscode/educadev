import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Javascript from './Pages/Javascript'
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login'
import PostarAula from './Pages/PostarAula';
import "./Rotas.css"

const Rotas = () => {
  return (
        <main className='main'>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/javascript" exact element={<Javascript />} />
                <Route path="/postaraula" element={<PostarAula />} />
            </Routes>
        </main>
  );
}

export default Rotas