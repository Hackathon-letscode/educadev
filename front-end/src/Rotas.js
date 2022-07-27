import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'

const Rotas = () => {
  return (
        <main>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/login" exact element={<Login />} /> */}
                {/* <Route path="/login" exact element={<Login />} /> */}
            </Routes>
        </main>
  )
}

export default Rotas