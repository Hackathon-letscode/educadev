import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from "axios"
import { useState } from "react";

function FormPostarAula() {

  const [materia, setMateria] = useState()
  const [titulo, setTitulo] = useState()
  const [professor, setProfessor] = useState()
  const [descricao, setDescricao] = useState()

  function handleSubmit(event) {
    event.preventDefault()
  }

  async function handleClick() {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/aulas",
        {
          materia: materia,
          titulo: titulo,
          professor: professor,
          descricao: descricao,
        }
      );
      console.log(response)
      if (response.data.titulo) {
        alert("Aula Cadastrada com sucesso")
      }
    }
    catch(error) {
      alert(error.response.data)
    }
  }




  return (
    <Container className="cadastro-container">
      <Form className="mt-5 col-md-6 col-lg-4" onSubmit={handleSubmit}>
        <fieldset>

          <Form.Group className="mb-3">
            <Form.Label>Selecione a matéria:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titúlo da aula"
              onChange={(e) => setMateria(e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Digite o titúlo da aula:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titúlo da aula"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nome do Professor:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome do professor"
              onChange={(e) => setProfessor(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Digite uma descrição:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </Form.Group>
          <Button 
            className="Button"
            type="submit"
            onClick={handleClick}
            >
              Cadastrar
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default FormPostarAula;
