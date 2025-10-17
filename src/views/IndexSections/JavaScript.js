
import React from "react";
// react plugin used to create datetimepicker
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  
} from "reactstrap";



export default function JavaScript() {

  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
     
      <div className="section">
        <Container>
          <div className="title">
            <h3>Chat with NeuroChat</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Open NeuroChat
              </h1>
              <p className="text-white mt-4">
               Chat to your virtual brainly bot Neuro!!
              </p>
              <Button color="primary" tag={Link} to="/chat-bot">
        neurochat
      </Button>
            </Col>
            <Col lg="6">
            <img
            alt="..."
            className=""
            src={require("assets/img/neurochat.png")}
          />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
