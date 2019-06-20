import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LightsView from "./LightsView";
import "bootstrap-slider/dist/css/bootstrap-slider.css"

export default class App extends React.Component {
  handleLightButtonClick(lightID, isOn) {
    console.log(lightID);
    console.log(isOn);
  };
  render() {
    return (
      <div>
        <Navbar sticky="top" bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tv">TV</Nav.Link>
            <Nav.Link href="#climate">Climate</Nav.Link>
          </Nav>
        </Navbar>
      
      <Container>
        <Row>
          <Col>
            <LightsView />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
