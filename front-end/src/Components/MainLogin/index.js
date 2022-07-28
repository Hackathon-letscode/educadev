import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Link from "react-bootstrap/NavLink";
import Row from "react-bootstrap/Row";
import "./styles.css";

export function MainLogin() {
  return (
    <Container className="mt-5 cadastro-container">
      <Form className="col-12 col-md-6 col-lg-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" placeholder="Insira seu telefone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button className="col-12" variant="primary" type="submit">
          Entrar
        </Button>
        <Row className="mt-3 mx-auto EsqueciCadastro col-12 text-center justify-content-between row">
          <Link className="col-auto">Cadastre-se</Link>
          <Link className="col-auto">Esqueci minha senha</Link>
        </Row>
      </Form>
    </Container>
  );
}
