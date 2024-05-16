
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Join your virtual classroom now! 
            </h2>
            <h4 className="description">
            The Virtual Classroom Experience
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://app.zimension3d.com/?id=66340592c88484ba1bb74089#/world-guest/66340592c88484ba1bb74089"
              role="button"
              size="lg"
            >
              Go
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        
      </Container>
    </div>
  );
}
