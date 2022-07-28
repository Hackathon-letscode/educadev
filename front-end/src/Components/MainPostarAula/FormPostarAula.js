import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function FormPostarAula() {
  return (
    <Container className="cadastro-container">
      <Form className="mt-5 col-md-6 col-lg-4">
        <fieldset>
          {/* <Form.Group className="mb-3">
          <Form.Label>Digite a matéria da aula:</Form.Label>
          <Form.Control type="text" placeholder="Matéria da aula" controlId="formBasicPassword"/>
        </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label>Selecione a matéria:</Form.Label>
            <Form.Select>
              <option>JavaScript</option>
              <option>matemática</option>
              <option>Português</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Digite o titúlo da aula:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titúlo da aula"
              controlId="formBasicPassword"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nome do Professor:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome do professor"
              controlId="formBasicPassword"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Digite uma descrição:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição"
              controlId="formBasicPassword"
            />
          </Form.Group>
          <Button className="Button" type="submit">Cadastrar</Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default FormPostarAula;
