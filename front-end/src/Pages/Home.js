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
      {/* <Container fluid> */}
      <section className="mb-0">
        <Row>
          <div className="col-6">
            <Figure className="mb-0">
              <Figure.Image src={img01} className="mb-0" />
            </Figure>
          </div>
          <Container className="d-flex flex-column col-6 align-items-left justify-content-center container mb-0">
            <h2>O que quer aprender hoje?</h2>
            <p>Descubra aulas online e veja quais serão as próximas</p>
            <Button className="w-25">Saiba mais</Button>
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
          <Row className="align-items-end col-12 justify-content-end">
            <h3 className="col-6 col-md-4 text-right">Seja você também um professor!</h3>
          </Row>
        </Container>
      </section>
      <section>
        <Row>
          <Container className="d-flex flex-column col-6 align-items-right justify-content-center container ps-md-5 ps-3">
            <h2>O que quer aprender hoje?</h2>
            <p>Descubra aulas online e veja quais serão as próximas</p>
            <Button className="w-25">Saiba mais</Button>
          </Container>
          <div className="col-6">
            <Figure>
              <Figure.Image src={img01} />
            </Figure>
          </div>
        </Row>
      </section>
      {/* </Container> */}
    </>
  );
};

export default Home;
