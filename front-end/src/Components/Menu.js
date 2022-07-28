import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Menu.css"
import Logo from "../assets/Logo.png"

function NavScrollExample() {
  return (
    <Navbar className="Menu" bg="light" expand="lg">
      <Container fluid>
      {/* Educa<span>Dev</span> */}
      {/* <img className="w-100" src={Logo} alt="" /> */}
        <Navbar.Brand href="#"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/home" href="home">Home</Nav.Link>
            {/* <Nav.Link href="/javascript">Materias</Nav.Link> */}
            <NavDropdown title="Matérias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/javascript">JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="/matematica">matemática</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
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