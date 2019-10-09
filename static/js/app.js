import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LightsView from "./LightsView";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import "bootstrap-slider/dist/css/bootstrap-slider.css"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperatureData: null};
    this.fetchTemperatureData('2019-10-05', '2019-10-09');
  }
  fetchTemperatureData(startDate, endDate) {
    let url = `http://smarthome.garverman.com:5000/get_temperature_humidity?start_date=${startDate}&end_date=${endDate}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
            throw Error('Network request failed');
        }    
        return response;
      })
      .then(d => d.json())
      .then(d => {
        this.setState({temperatureData: this.getFormattedData(d)});
      })
  }
  getFormattedData(temperatureData) {
    var formattedData = temperatureData.map((element) => {
      var datum = {name: element.currentdate};
      datum[element.room + "_temp"] = element.temperature;
      datum[element.room + "_hum"] = element.humidity;
      return datum;
    });
    return formattedData;
  }
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
          <Col>
          <LineChart
            width={800}
            height={500}
            data={this.state.temperatureData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bedroom_temp" stroke="#8884d8" dot={null} connectNulls={true}/>
            <Line type="monotone" dataKey="living_room_temp" stroke="#82ca9d" dot={null} connectNulls={true}/>
            {/* <Line type="monotone" dataKey="living_room_hum" dot={null} connectNulls={true}/> */}
            {/* <Line type="monotone" dataKey="bedroom_hum" dot={null} connectNulls={true}/> */}
          </LineChart>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
