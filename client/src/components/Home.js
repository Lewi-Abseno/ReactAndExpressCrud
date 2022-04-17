import React from "react";
import { Alert, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <Container fluid="md" className="d-flex align-items-center justify-content-center pt-5">
            <Row className="d-flex align-items-center justify-content-center">
                <Alert variant="info">
                    <Alert.Heading>Hello Admin</Alert.Heading>
                    <p>
                        Welcome to the version 1.0.0-alpha of the hospital management application.
                        This a portal for hospital administrators to view and/or modify all pertinent
                        information for the day to day operation of a hospital or other similar
                        medical facility (e.g. urgent care).
                    </p>
                    <hr />
                    <p className="mb-0">
                        The various information and functions available in this application can be explored 
                        via the navbar at the top.
                    </p>
                </Alert>
            </Row>
        </Container>

    );
}

export default Home;