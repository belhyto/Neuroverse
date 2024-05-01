/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">Neuro Match</h2>
            <h4 className="description">
            Match your emotion and earn points
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="warning"
                href="https://neuromatch.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
Play Now!              </Button>
              
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
