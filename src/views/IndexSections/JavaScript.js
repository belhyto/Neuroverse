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
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "",
  },
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
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
            <h3></h3>
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
