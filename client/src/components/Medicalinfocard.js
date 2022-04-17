import React, { useEffect, useState } from 'react'
import "../App.css"
import { Container, Card, ListGroup} from "react-bootstrap"

function Medicalinfocard (props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header><b>{props.name}</b></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item> <b>Systolic: </b>{props.systolic}</ListGroup.Item>
                    <ListGroup.Item> <b>Diastolic: </b>{props.diastolic} </ListGroup.Item>
                    <ListGroup.Item><b>Heart Rate: </b>{props.heart_rate} </ListGroup.Item>
                    <ListGroup.Item><b>Respirations: </b>{props.respirations} </ListGroup.Item>
                    <ListGroup.Item><b>Height: </b>{props.height} </ListGroup.Item>
                    <ListGroup.Item><b>Weight: </b>{props.weight} </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default Medicalinfocard;