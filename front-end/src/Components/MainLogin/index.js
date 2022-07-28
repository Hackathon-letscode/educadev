import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function MainLogin() {
  return (
    <div className="cadastro-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" placeholder="Insira seu telefone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </div>
  );
}
