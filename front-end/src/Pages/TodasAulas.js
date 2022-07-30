

import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row';
import Cards from '../Components/Card/Cards'
import img1 from "../assets/imagemHack.png";
import axios from "axios"

const TodasAulas = () => {

  // const [titulo, setTitulo] = useState()
  // const [descricao, setDescricao] = useState()

  const [dados, setDados] = useState([])

  useEffect(() => {
    async function exibirAulas() {
      const response = await axios.get("http://localhost:3001/api/aulas")
      //  setTitulo(response.data.titulo)
      //  setDescricao(response.data.descricao)
      setDados(response.data)
       console.log(response.data)
      }
      exibirAulas()
  },[])

  return (
    <Row className="col-auto justify-content-evenly">
           {dados.map((dado) => (
            <Cards key={dado._id} id={dado._id} titulo={dado.titulo} descricao={dado.descricao} imagem={img1}/>
           ))}
    </Row>
  )
}

export default TodasAulas