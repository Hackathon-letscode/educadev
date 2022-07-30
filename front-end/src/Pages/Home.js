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
      <section className="mb-0">
        <Row className="col-12 g-0">
          <div className="col-12 col-md-6">
            <Figure className="mb-0">
              <Figure.Image src={img01} className="mb-0" />
            </Figure>
          </div>
          <Container className="d-flex flex-column col-12 col-md-6 align-items-start justify-content-center container mb-3 mb-md-0 px-0 px-md-5 ">
            <div className="wrapper informacoes">
              <h2>O que quer aprender hoje?</h2>
              <p>Descubra aulas online e veja quais serão as próximas</p>
              <div className="d-flex flex-wrap justify-content-between container-fluid">
                <Button href="/todasaulas" className="button">
                  Todas as aulas
                </Button>
                <Button href="/matematica" className="button">
                  Matemética
                </Button>
                <Button href="/javascript" className="button">
                  JavaScript
                </Button>
              </div>
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
          <Row className="align-items-end col-12 justify-content-end">
            <h3 className="col-6 col-md-4 text-right">
              Seja você também um professor!
              <Button href="postaraula" className="button">
                Postar aula
              </Button>
            </h3>
          </Row>
        </Container>
      </section>
      <section>
        <Row className="col-12 g-0">
          <Container className="d-flex flex-column col-12 col-md-6 align-items-end justify-content-center mb-3 mb-md-0 px-0 container px-md-5">
            <div className="wrapper informacoes">
              <h2>Ainda não faz parte do nosso time?</h2>
              {/* <p>Cadastre-se</p> */}
              <Button href="cadastro" className="button">
                Cadastre-se
              </Button>
            </div>
          </Container>
          <div className="col-12 col-md-6 inverter-ordem mt-3 mt-md-0">
            <Figure className="mb-0">
              <Figure.Image src={img01} className="mb-0" />
            </Figure>
          </div>
        </Row>
      </section>
    </>
  );
};

export default Home;
