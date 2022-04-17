import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from "./components/navbar/navbar";
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";

import Companies from './components/Companies';
import Patient from './components/Patient';
import Home from './components/Home';
import Insurance from './components/Insurance';
import Medical from './components/Medical';
import Doctor from './components/Doctor';
import Providers from './components/Providers';
import Appointment from './components/Appointment';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/API")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  } 

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center">
          <Container>
            <Navbar.Brand href="/">[Hospital]</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/Patient">Patients</Nav.Link>
                <Nav.Link href="/Insurance">Insurance</Nav.Link>
                <Nav.Link href="/Medical">Medical</Nav.Link>
                <Nav.Link href="/Appointments">Appointments</Nav.Link>
                <NavDropdown title="Further Info" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/Doctor">Doctors</NavDropdown.Item>
                  <NavDropdown.Item href="/Providers">Providers</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="Companies">
                    Companies
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Companies" element={<Companies />} />
          <Route path="/Patient" element={<Patient />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/Medical" element={<Medical />} />
          <Route path="/Doctor" element={<Doctor />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/Appointments" element={Appointment} />
        </Routes>
      </Router>
    );
  }
}

export default App;
