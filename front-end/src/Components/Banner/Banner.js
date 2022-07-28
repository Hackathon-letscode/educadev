import Figure from 'react-bootstrap/Figure';
import study from "../../assets/study2.jpg"

function Banner() {
  return (
    <Figure>
      <Figure.Image
        alt="171x180"
        src={study}
      />
    </Figure>
  );
}

export default Banner;