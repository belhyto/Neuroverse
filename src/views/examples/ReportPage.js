import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
    accuracy: 84,
    attention: 74,
  };

  // Simulated future predictions based on a regression model
  const futurePredictions = {
    memoryGame: 85, // Predicted future progress
    emotionRecognition: 95,
    accuracy: 90,
    attention: 80,
  };

  // Data for the prediction chart
  const predictionData = {
    labels: ["Current", "Predicted"],
    datasets: [
      {
        label: "Memory Game",
        data: [userProgress.memoryGame, futurePredictions.memoryGame],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Emotion Recognition",
        data: [userProgress.emotionRecognition, futurePredictions.emotionRecognition],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Accuracy",
        data: [userProgress.accuracy, futurePredictions.accuracy],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Attention",
        data: [userProgress.attention, futurePredictions.attention],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
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
                        <progress value={userProgress.attention} max="100"></progress>
                        <p>{userProgress.attention}%</p>
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
                    <CardBody>
                       <h6>Future Progress Predictions</h6>
                      <div className="chart-area">
                        <Line
                          data={predictionData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                              y: {
                                beginAtZero: true,
                                max: 100,
                              },
                            },
                          }}
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