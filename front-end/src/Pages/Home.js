import React from "react";
import Banner from "../Components/Banner/Banner";
import { Row, Container, Figure, Button } from "react-bootstrap";
import "./home.css";

import img01 from "../assets/home-01.png";
import img02 from "../assets/home-02.png";

const Home = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      {/* <Container fluid> */}
      <section className="mb-0">
        <Row className="d-flex flex-column">
          {/* <div className="col-6">
            <Figure className="mb-0">
              <Figure.Image src={img01} className="mb-0" />
            </Figure>
          </div> */}
          <Container className="container_figure d-flex flex-column col-12 align-items-left justify-content-center container mb-0">
            <Figure className="mb-0">
              <Figure.Image src={img01} className="mb-0" />
            </Figure>
            <div className="informacoes">
              <h2>O que quer aprender hoje?</h2>
              <p>Descubra aulas online e veja quais serão as próximas</p>
              <Button className="button">Saiba mais</Button>
            </div>
          </Container>
        </Row>
      </section>
      <section
        className="mid-banner"
        style={{
          backgroundImage: `url(${img02})`,
          height: "300px",
          width: "auto",
        }}
      >
        <Container>
          <Row className="align-items-end justify-content-end">
            <h3 className="col-6 col-md-4 text-right">Seja você também um professor!</h3>
          </Row>
        </Container>
      </section>
      <section>
      <Row className="d-flex flex-column">
          {/* <div className="col-6">
            <Figure className="mb-0">
              <Figure.Image src={img01} className="mb-0" />
            </Figure>
          </div> */}
          <Container className="container_figure d-flex flex-column col-12 align-items-left justify-content-center container mb-0">
            <Figure className="mb-0">
              <Figure.Image src={img01} className="mb-0" />
            </Figure>
            <div className="informacoes">
              <h2>O que quer aprender hoje?</h2>
              <p>Descubra aulas online e veja quais serão as próximas</p>
              <Button className="button">Saiba mais</Button>
            </div>
          </Container>
        </Row>
      </section>
      {/* </Container> */}
    </>
  );
};

export default Home;
