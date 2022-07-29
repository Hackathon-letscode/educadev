import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Link from 'react-bootstrap/NavLink';
import Row from 'react-bootstrap/Row';
import './styles.css';
import axios from 'axios';
import { useState } from 'react';

export function MainLogin() {
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function handleClick() {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/usuario/login',
        {
          telefone: telefone,
          senha: senha,
        }
      );
      console.log(response);
      if (response.data.nome) {
        alert('Usuário cadastrado com sucesso');
      }
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <Container className="mt-5 cadastro-container">
      <Form className="col-12 col-md-6 col-lg-4" onSubmit={handleSubmit}>
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
        <Button
          className="col-12"
          variant="primary"
          type="submit"
          onClick={handleClick}
        >
          Entrar
        </Button>
        <Row className="mt-3 mx-auto EsqueciCadastro col-12 text-center justify-content-between row">
          <Link href="/cadastro" className="col-auto">
            Cadastre-se
          </Link>
          <Link className="col-auto">Esqueci minha senha</Link>
        </Row>
      </Form>
    </Container>
  );
}
