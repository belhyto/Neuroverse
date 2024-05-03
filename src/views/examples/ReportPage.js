import React from "react";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Line } from "react-chartjs-2";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
export default function ReportPage() {
  // Assuming these are dummy data for user's progress
  const userProgress = {
    memoryGame: 75, // Example: 75% progress in memory game
    emotionRecognition: 90, // Example: 90% progress in emotion recognition game
    accuracy : 84, 
    attention : 74, 
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content-center">
            <Container>
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader>
                      <h5 className="title">Brain Training Progress Report</h5>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <h6>Memory Game Progress</h6>
                        <progress value={userProgress.memoryGame} max="100"></progress>
                        <p>{userProgress.memoryGame}%</p>
                      </div>
                      <div>
                        <h6>Emotion Recognition Game Progress</h6>
                        <progress value={userProgress.emotionRecognition} max="100"></progress>
                        <p>{userProgress.emotionRecognition}%</p>
                      </div>
                      <div>
                        <h6>Accuracy Rate</h6>
                        <progress value={userProgress.accuracy} max="100"></progress>
                        <p>{userProgress.accuracy}%</p>
                      </div>
                      <div>
                        <h6>Attention Rate</h6>
                        <progress value={userProgress.emotionRecognition} max="100"></progress>
                        <p>{userProgress.emotionRecognition}%</p>
                      </div>
                    </CardBody>
                    <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
                    <CardFooter>
                      <Button color="primary">Share Report</Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
