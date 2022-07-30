import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import Logo from "../../assets/logo2.png";

function NavScrollExample() {
  return (
    <Navbar className="Menu col-12" expand="lg">
      <Container fluid>
        {/* Educa<span>Dev</span> */}
        {/* <img className="w-100" src={Logo} alt="" /> */}
        <Navbar.Brand href="/home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to="/home" href="/home">
              Home
            </Nav.Link>
            {/* <Nav.Link href="/javascript">Materias</Nav.Link> */}
            <NavDropdown title="Matérias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/javascript">JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="/matematica">matemática</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/todasaulas">
                Todas As Aulas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/cadastro">Cadastre-se</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/postaraula">Postar Aula</Nav.Link>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
