import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"
import {useAulas} from "../../context/AulaContext"
// import api from "../../services/api"

function Cards({titulo, descricao, imagem, id}) {

  function handleClick() {
    setAula(titulo, descricao, imagem)
  }
  
  const [aula, setAula] = useAulas()
  console.log(aula)

  return (
    <>
      <Row className='m-auto'>
        <Card className="mx-auto col-auto mt-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imagem} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
              {descricao}
            </Card.Text>
            <Link to={`/videoaula/${id}`}><Button onClick={handleClick()} variant="primary">Ver Mais</Button></Link>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}

export default Cards;
