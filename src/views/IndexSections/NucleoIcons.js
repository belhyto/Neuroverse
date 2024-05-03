
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">NeuroPlay!</h2>
            <h4 className="description">
            Match your emotion and earn points
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="warning"
                to="/landing-page" tag={Link}>
                Play Now!
              </Button>
            </div>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="https://neuromatch.netlify.app/">
            <div className="icons-container blur-item on-screen mt-5"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <img alt="..."  src={require("./neuro.png")} />
       
            </div>
            <span className="blur-hidden h5 text-primary">
            Explore Emotions: Match, Learn, Grow! </span>
          </a>
        </div>
      </Container>
    </div>
  );
}
