import React, { useEffect, useState } from 'react'
import "../App.css"
import { Container, Card, ListGroup} from "react-bootstrap"

function Patientcard (props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header><b>{props.name}</b></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item> <b>Email: </b>{props.email}</ListGroup.Item>
                    <ListGroup.Item> <b>Phone: </b>{props.phone} </ListGroup.Item>
                    <ListGroup.Item><b>Age: </b>{props.age} </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default Patientcard;