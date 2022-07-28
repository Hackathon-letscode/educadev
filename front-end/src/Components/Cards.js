import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import img1 from "../assets/imagemHack.png";

function Cards({titulo, descricao}) {
  return (
    <>
      <Row>
        <Card className="mx-auto col-auto mt-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
              {descricao}
            </Card.Text>
            <Button variant="primary">Ver Mais</Button>
          </Card.Body>
        </Card>
        <Card className="mx-auto col-auto mt-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Ver Mais!</Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}

export default Cards;