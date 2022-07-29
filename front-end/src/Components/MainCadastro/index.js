import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import axios from 'axios';
import { useState } from 'react';

export function MainCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function handleClick() {
    try {
      const response = await axios.post('http://localhost:3001/api/usuario', {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
      });
      console.log(response);
      if (response.data.nome) {
        alert('Usuário cadastrado com sucesso');
      }
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <>
      <Container className="mt-5 cadastro-container">
        <Form className="col-12 col-md-6 col-lg-4" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira seu nome completo"
              onChange={(event) => setNome(event.target.value)}
              value={nome}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Insira seu email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira seu telefone"
              onChange={(event) => setTelefone(event.target.value)}
              value={telefone}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={(event) => setSenha(event.target.value)}
              value={senha}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 justify-content-between  row"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              className="col-auto"
              type="checkbox"
              label="Sou professor"
            />
            <Form.Check
              className="col-auto"
              type="checkbox"
              label="Sou aluno"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClick}>
            Cadastrar
          </Button>
          {}
          <span></span>
        </Form>
      </Container>
    </>
  );
}
