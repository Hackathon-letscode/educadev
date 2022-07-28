import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/imagemHack.png";
// import api from "../../services/api"

function Cards({titulo, descricao}) {
  return (
    <>
      <Row className='m-auto'>
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
        

      </Row>
    </>
  );
}

export default Cards;
